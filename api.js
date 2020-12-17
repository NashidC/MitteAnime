import axios from "axios";
// Top is a function that calls the API and console.log the data
export default async () => {
  const url = "https://api.jikan.moe/v3/top/anime/1";
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error(error);
  }
};
