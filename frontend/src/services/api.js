import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export const loginUser = (data) => API.post("/auth/login/", data);

export const predictText = (text, token) =>
  API.post(
    "/predict/",
    { text },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const getAnalytics = (token) =>
  API.get("/analytics/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  export const registerUser = (data) =>
  API.post("/auth/register/", data);

  export const getBlockedHistory = (token) =>
  API.get("/analytics/blocked-history/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });