import React from "react"
import { BaseLink } from "../../atoms"
import "./Button.scss"

const Button = ({ children, size, ...props }) => {
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

export default Button
