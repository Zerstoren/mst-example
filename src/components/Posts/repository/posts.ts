import axios from "axios"

export const getAllPosts = async () => {
  const data = await axios.get("https://jsonplaceholder.typicode.com/posts");

  if (Object.keys(data).length === 0) {
    return false;
  }

  return data;
}