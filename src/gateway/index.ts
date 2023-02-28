import axios from "axios";
import { Vinyl } from "../constants/types";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchProductsList = async () =>
  await axios.get<Vinyl[]>(`${baseUrl}`);
