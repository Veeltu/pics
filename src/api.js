import axios from "axios";
const YOUR_ACCESS_KEY = "EvIiT14dqCuPRLqg2Dxq58OcoEaEN-ZDeYK-iz4mCY8";

const searchImages = async (term) => {
  const resp = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${YOUR_ACCESS_KEY}`,
    },
    params: {
      query: term,
    },
  });
  return resp.data.results;
};

export default searchImages;
