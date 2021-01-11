import React from "react"

const HeroImage = ({ imageURL }) => {
  return <img src={require(imageURL)} alt="Hero Image" className="HeroImage" />
}

export default HeroImage
