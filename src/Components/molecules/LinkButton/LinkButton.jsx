import React from "react"
import { BaseLink } from "../../atoms"
import "./LinkButton.scss"

const LinkButton = ({ children, size, ...props }) => {
  const btnSize = size === "lg" ? "large" : "small"
  const btn = (
    <BaseLink {...props}>
      <button type="button" className={`btns ${btnSize}`}>
        {children}
      </button>
    </BaseLink>
  )
  return btn
}

export default LinkButton
