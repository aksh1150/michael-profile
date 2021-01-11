import React from "react"
import PropTypes from "prop-types"
import "./FlexBox.scss"

const FlexBox = ({ children, width }) => {
  return <div className={`FlexBox ${width}`}>{children}</div>
}
FlexBox.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string.isRequired,
}
export default FlexBox
