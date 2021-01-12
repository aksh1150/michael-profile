import React from "react"
import PropTypes from "prop-types"
import "./FlexBox.scss"

const FlexBox = ({ children, width, className }) => {
  return <div className={`FlexBox ${width} ${className}`}>{children}</div>
}
FlexBox.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
}
export default FlexBox
