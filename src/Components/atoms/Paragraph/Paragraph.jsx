import React from "react"
import PropTypes from "prop-types"
import "./Paragraph.scss"

export default function Paragraph({ size, fontcolour, children }) {
  return (
    <p
      className={`Paragraph ${fontcolour ? fontcolour : "dark"} ${
        size ? size : "xs"
      }`}
    >
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  fontcolour: PropTypes.string,
}
