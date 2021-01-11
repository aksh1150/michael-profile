import React, { useState } from "react"
import Image from "react-image-enlarger"

const ImageEnlarge = ({ src, alt }) => {
  const [zoomed, setZoomed] = useState(false)
  return (
    <Image
      style={{ width: "auto", height: "auto" }}
      zoomed={zoomed}
      src={src}
      onClick={() => setZoomed(true)}
      onRequestClose={() => setZoomed(false)}
      alt={alt}
    />
  )
}

export default ImageEnlarge
