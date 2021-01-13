import React from "react"
import PropTypes from "prop-types"

import "./BulletSection.scss"

const BulletSection = ({ children, bold, large, inline, italic }) => {
  return (
    <p
      className={`BulletSection ${bold ? "bold" : ""} ${
        large ? "largeSize" : ""
      } ${inline ? "inline" : ""} ${italic ? "italic" : ""}`}
    >
      {children}
    </p>
  )
}
BulletSection.propTypes = {
  children: PropTypes.string,
}
export default BulletSection
