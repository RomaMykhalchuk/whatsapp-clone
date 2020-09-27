import express from "express";
import mongoose from "mongoose";
import Pusher from "pusher";
import cors from "cors";

import Messages from "./dbMessages.js";

const app = express();
const PORT = process.env.PORT || 9000;

let pusher = new Pusher({
  appId: "1080335",
  key: "f0ca0130827f1f38fd8d",
  secret: "f121c3fcca92ce9ba65d",
  cluster: "eu",
  encrypted: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB connected");

  const msgColection = db.collection("messagecontents");
  const changeStream = msgColection.watch();

  changeStream.on("change", (change) => {
    console.log(change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("Error triggering pusher");
    }
  });
});

app.use(express.json());
app.use(cors());

const connection_url =
  "mongodb+srv://admin:RsYMUbSZNdQlYTsc@cluster0.zcebc.mongodb.net/whatsupdb?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;
  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(`new message created: \n ${data}`);
    }
  });
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
