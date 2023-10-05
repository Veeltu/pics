import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    const result = await searchImages(e);
    setImages(result);
  };

  return (
    <>
      <p>work in progress</p>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </>
  );
}

export default App;
