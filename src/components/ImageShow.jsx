import React from 'react'

export default function ImageShow({ image }) {
  return (
    <>
    <div>{image.alt_description}</div>
     <div className="img">
      <img src={image.urls.small} alt={image.alt_description} />
     </div>
     </>
  )
}
