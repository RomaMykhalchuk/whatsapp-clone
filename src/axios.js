import axios from "axios";

const instance = axios.create({
  baseURL: "https://wapp-clone.herokuapp.com",
});

export default instance;
