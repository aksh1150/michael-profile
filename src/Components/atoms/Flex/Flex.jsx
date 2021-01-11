import React from "react"
import PropTypes from "prop-types"
import "./Flex.scss"

const Flex = ({ children }) => {
  return <div className="Flex-Container">{children}</div>
}
Flex.propTypes = {
  children: PropTypes.node,
}
export default Flex
