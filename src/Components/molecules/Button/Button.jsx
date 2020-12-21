import React from "react"
import { BaseLink } from "../../atoms"
import "./Button.scss"

const Button = ({ children }) => {
  const btn = (
    <BaseLink>
      <button type="button">{children}</button>
    </BaseLink>
  )
  return btn
}

export default Button
