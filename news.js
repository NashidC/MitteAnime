import axios from "axios";
export default async () => {
  const url = "https://api.jikan.moe/v3/anime/1/news";
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error(error);
  }
};
