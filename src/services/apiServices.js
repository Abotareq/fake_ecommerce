import { axiosClient } from "../Api/clientApi";

export const getData = async (endpoint) => {
  return await axiosClient.get(endpoint).then((response) => response.data);
};
