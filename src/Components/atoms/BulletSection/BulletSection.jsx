import React from "react"
import PropTypes from "prop-types"

import "./BulletSection.scss"

const BulletSection = ({ children, bold, large }) => {
  return (
    <p
      className={`BulletSection ${bold ? "bold" : ""} ${
        large ? "largeSize" : ""
      }`}
    >
      {children}
    </p>
  )
}
BulletSection.propTypes = {
  children: PropTypes.string,
}
export default BulletSection
