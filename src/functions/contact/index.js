import axios from "axios";
import { Endpoints, createConfig } from "../../config";
export const sendMessage = async (submittedData) => {
  console.log(submittedData);
  try {
    const { data } = await axios.post(
      Endpoints.sendMessage,
      submittedData,
      createConfig
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};
