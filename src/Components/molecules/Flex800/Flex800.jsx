import React from "react"
import PropTypes from "prop-types"
import "./Flex800.scss"

const Flex800 = ({ children }) => {
  return <div className="Flex800">{children}</div>
}
Flex800.propTypes = {
  children: PropTypes.node,
}
export default Flex800
