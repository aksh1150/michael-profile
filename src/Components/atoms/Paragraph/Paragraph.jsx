import React from "react"
import PropTypes from "prop-types"
import "./Paragraph.scss"

export default function Paragraph({ size, fontcolour, children, className }) {
  return (
    <p
      className={`Paragraph ${fontcolour ? fontcolour : "dark"} ${
        size ? size : "xs"
      } ${className}`}
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
