import React, { useState } from "react"
import Image from "react-image-enlarger"
import PropTypes from "prop-types"

import "./ImageEnlarge.scss"

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

ImageEnlarge.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
}

export default ImageEnlarge
