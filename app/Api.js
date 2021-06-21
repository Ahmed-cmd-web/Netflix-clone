/** @format */

import axios from "axios";
import axiosRateLimit from "axios-rate-limit";
import Moviespaths from "./config/Moviespaths";
const url = axiosRateLimit(
  axios.create({
    baseURL: "https://api.themoviedb.org/3",
  }),
  { maxRequests: 2, perMilliseconds: 10000, maxRPS: 2 }
);
const getmovies = async (uri) => {
  try {
    
    const res = await url.get(uri);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export default { getmovies };
