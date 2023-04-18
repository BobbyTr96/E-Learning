import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://elearningnew.cybersoft.edu.vn/api/",
  headers: {
    TokenCybersoft:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNiIsIkhldEhhblN0cmluZyI6IjE5LzA3LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4OTcyNDgwMDAwMCIsIm5iZiI6MTY2MDQxMDAwMCwiZXhwIjoxNjg5ODcyNDAwfQ.LOuGqORmUbzSj-vrf010cInw8TjYTzoLxS6HI1nQakE",
  },
});

fetcher.interceptors.response.use(
  (response) => {
    return response.data;
  },

  (error) => {
    return Promise.reject(error.response.data);
  }
);

fetcher.interceptors.request.use(
  (config) => {
    const { accessToken } =
      JSON.parse(localStorage.getItem("studentUser")) ||
      JSON.parse(sessionStorage.getItem("studentUser")) ||
      {};
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error.response.data);
  }
);

export default fetcher;
