import React from "react"
import PropTypes from "prop-types"

import "./BulletSection.scss"

const BulletSection = ({ children, bold, large, inline }) => {
  return (
    <p
      className={`BulletSection ${bold ? "bold" : ""} ${
        large ? "largeSize" : ""
      } ${inline ? "inline" : ""}`}
    >
      {children}
    </p>
  )
}
BulletSection.propTypes = {
  children: PropTypes.string,
}
export default BulletSection
