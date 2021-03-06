import React from "react"
import PropTypes from "prop-types"
import "./Flex.scss"

const Flex = ({ children, className }) => {
  return <div className={`Flex-Container ${className}`}>{children}</div>
}
Flex.propTypes = {
  children: PropTypes.node,
}
export default Flex
