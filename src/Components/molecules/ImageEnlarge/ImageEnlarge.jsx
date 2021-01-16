import React from "react"
import PropTypes from "prop-types"
import ModalImage from "react-modal-image"

import "./ImageEnlarge.scss"

const ImageEnlarge = ({ src, alt, className }) => {
  return (
    <ModalImage
      small={src}
      medium={src}
      alt={alt}
      className={`ImageLarger ${className}`}
      hideDownload
      imageBackgroundColor="white"
      hideZoom
    />
  )
}

ImageEnlarge.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
}

export default ImageEnlarge
