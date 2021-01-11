import React from "react"
import PropTypes from "prop-types"

const HighlightedQuotes = ({ children }) => {
  return <p>{children}</p>
}
HighlightedQuotes.propTypes = {
  children: PropTypes.node,
}
export default HighlightedQuotes
