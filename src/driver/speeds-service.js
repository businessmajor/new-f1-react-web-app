import axios from "axios";

//const SERVER = process.env.REACT_APP_API_BASE
const SERVER = "http://localhost:4000";
const BASE_API = `${SERVER}/api`;
// should be https://f1-node-server-app.onrender.com or 

// const SERVER = process.env.REACT_APP_API_BASE;
// const BASE_API = `${SERVER}/api`;
const SPEEDS_API = `${BASE_API}/speeds`;

const request = axios.create({
  withCredentials: true,
});

export const createSpeed = async (speed, uid) => {
  const response = await request.post(`${SPEEDS_API}/${uid}`, speed);
  return response.data;
};

export const findMySpeeds = async () => {
  const response = await request.get(`${BASE_API}/my-speeds`);
  return response.data;
};

export const findAllSpeeds = async () => {
  const response = await request.get(`${SPEEDS_API}`);
  return response.data;
};
