import React from "react"
import { Link } from "gatsby"
import "./baselink.scss"

const BaseLink = ({
  children,
  link,
  className,
  clickEvent,
  target,
  internal,
  noHoverEffect,
  ...props
}) => {
  const blankTarget = target ? "_blank" : ""
  const referrer = target ? "noreferrer" : ""
  const newLink = link || null
  const isHover = noHoverEffect ? "isHover" : ""
  const composedClassName = `${className} ${isHover}` || ""

  const events = internal ? (
    <Link
      to={newLink}
      data-testid="id"
      className={`baselink ${composedClassName}`}
    >
      {children}
    </Link>
  ) : (
    <a
      href={newLink}
      data-testid="id"
      className={`baselink ${composedClassName}`}
      target={blankTarget}
      rel={referrer}
      onClick={clickEvent}
      role="button"
    >
      {children}
    </a>
  )
  return events
}
export default BaseLink
