import axios from "axios";

const KEY = "AIzaSyBUcuAhkHX251VnXTQ_JEJLh9nWJDkBcNs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
