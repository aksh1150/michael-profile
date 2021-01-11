import React from "react"
import PropTypes from "prop-types"

const BulletSection = ({ children, bold, size }) => {
  return (
    <p className={`BulleteSection ${bold ? "bold" : ""} ${size ? "size" : ""}`}>
      {children}
    </p>
  )
}
BulletSection.propTypes = {
  children: PropTypes.string,
}
export default BulletSection
