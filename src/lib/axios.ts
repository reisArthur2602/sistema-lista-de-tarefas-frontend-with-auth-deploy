import axios from "axios";
import { cookies } from "next/headers";

const apiConnection = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

apiConnection.interceptors.response.use(null, (error) => {
  return Promise.reject(error);
});

apiConnection.interceptors.request.use((config) => {
  const token = cookies().get("session-access-token")?.value as string;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, null);

export { apiConnection };
