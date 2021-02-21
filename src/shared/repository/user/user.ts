import axios, { AxiosResponse } from "axios";

export const getUser = async (id: number) : Promise<AxiosResponse | false> => {
  const data = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (Object.keys(data).length === 0) {
    return false;
  }

  return data;
}
