import React from "react";
import ImageShow from "./ImageShow";

export default function ImageList({ images }) {

  console.log(images);

  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />
  })

  return (
    <div>
     {renderedImages}
    </div>
  );
}
