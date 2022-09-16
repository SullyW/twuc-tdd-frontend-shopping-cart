import axios from "axios";

export const getData = async () => {
  const result = await axios.get("http://localhost:8000/");
  return result.data;
};
