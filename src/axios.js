import axios from "axios";

const instance = axios.create({
  baseURL: "https://whatsapp-clone1.herokuapp.com",
});

export default instance;
