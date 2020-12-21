import React from "react"
import "./ShareButton.scss"

const ShareButton = ({ children, size, ...props }) => {
  const btnSize = size === "lg" ? "large" : "small"
  const btn = (
    <BaseLink {...props}>
      <button type="button" className={`btn ${btnSize}`}>
        {children}
      </button>
    </BaseLink>
  )
  return btn
}

export default ShareButton
