import React from "react"
import PropTypes from "prop-types"
import "./HeroImage.scss"

const HeroImage = ({ imageURL }) => {
  return <img src={require(imageURL)} alt="Hero Image" className="HeroImage" />
}
HeroImage.propTypes = {
  imageURL: PropTypes.string,
}
export default HeroImage
