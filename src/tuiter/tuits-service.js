import axios from "axios";

// https://f1-node-server-app.onrender.com or localhost:4000
const SERVER = process.env.REACT_APP_API_BASE;
const BASE_API = `${SERVER}/api`;
const TUITS_API = `${BASE_API}/tuits`;

const request = axios.create({
  withCredentials: true,
});

export const createTuit = async (tuit) => {
  const response = await request.post(`${TUITS_API}`, tuit);
  return response.data;
};

export const findMyTuits = async () => {
  const response = await request.get(`${BASE_API}/my-tuits`);
  return response.data;
};

export const findAllTuits = async () => {
  const response = await request.get(`${TUITS_API}`);
  return response.data;
};
