import React from "react"
import { BaseLink } from "../../atoms"
import "./LinkButton.scss"

const LinkButton = ({ children, size, active, ...props }) => {
  const btnSize = size === "lg" ? "large" : "small"
  const isActive = active ? "active" : ""
  const btn = (
    <BaseLink {...props}>
      <button type="button" className={`Linkbtns ${btnSize} ${isActive}`}>
        {children}
      </button>
    </BaseLink>
  )
  return btn
}

export default LinkButton
