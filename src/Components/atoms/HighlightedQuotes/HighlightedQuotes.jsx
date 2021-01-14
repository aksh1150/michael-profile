import React from "react"
import PropTypes from "prop-types"
import "./HighlightedQuotes.scss"

const HighlightedQuotes = ({ children, className }) => {
  return <p className={`HighlightedQuotes ${className}`}>{children}</p>
}
HighlightedQuotes.propTypes = {
  children: PropTypes.node,
}
export default HighlightedQuotes
