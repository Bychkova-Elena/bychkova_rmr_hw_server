import axios from "axios";

export default axios.create({
  baseURL: `http://51.250.65.73/api/v1/`,
  headers: {
    "Access-Control-Allow-Origin": "http://51.250.65.73/api/v1/",
    "Content-Type": "application/json"
  }
});
