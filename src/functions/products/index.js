import axios from "axios";
import { Endpoints, getConfig } from "../../config";
export const getProducts = async (page) => {
  try {
    const { data } = await axios.get(
      Endpoints.getProducts +
        `&pagination[pageSize]=8&pagination[page]=${page}`,
      getConfig
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};
