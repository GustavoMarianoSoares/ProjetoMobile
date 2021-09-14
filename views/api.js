import axios from "axios";

const api = axios.create({
  baseURL: "https://salty-gorge-92638.herokuapp.com/",
});

export default api;
