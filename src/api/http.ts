import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 8000,
});

// Optional: log errors to console
http.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("API Error:", err);
    throw err;
  }
);
