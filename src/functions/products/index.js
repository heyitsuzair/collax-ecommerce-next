import axios from "axios";
import { Endpoints, getConfig } from "../../config";
export const getProducts = async () => {
  try {
    const { data } = await axios.get(Endpoints.getProducts, getConfig);
    return data;
  } catch (error) {
    return error.response.data;
  }
};
