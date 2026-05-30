import axios from "axios";

const API = axios.create({
  baseURL: "https://project-job-board-mu.vercel.app/api"
});

export default API;
