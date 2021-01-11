import React from "react"
import PropTypes from "prop-types"
import "./HighlightedQuotes.scss"

const HighlightedQuotes = ({ children }) => {
  return <p className="HighlightedQuotes">{children}</p>
}
HighlightedQuotes.propTypes = {
  children: PropTypes.node,
}
export default HighlightedQuotes
