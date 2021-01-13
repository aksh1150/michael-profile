import React from "react"
import PropTypes from "prop-types"

import "./BulletSection.scss"

const BulletSection = ({
  children,
  bold,
  large,
  inline,
  italic,
  className,
}) => {
  return (
    <p
      className={`BulletSection ${bold ? "bold" : ""} ${
        large ? "largeSize" : ""
      } ${inline ? "inline" : ""} ${italic ? "italic" : ""} ${className}`}
    >
      {children}
    </p>
  )
}
BulletSection.propTypes = {
  children: PropTypes.node,
}
export default BulletSection
