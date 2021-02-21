import axios from "axios"

export const getAllUsers = async () => {
  const data = await axios.get("https://jsonplaceholder.typicode.com/users");

  if (Object.keys(data).length === 0) {
    return false;
  }

  return data;
}