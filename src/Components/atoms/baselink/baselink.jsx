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
  InnerLink,
  template,
  ...props
}) => {
  const blankTarget = target ? "_blank" : ""
  const referrer = target ? "noreferrer" : ""
  const newLink = link || null
  const isHover = noHoverEffect ? "isHover" : ""
  const composedClassName = `${className} ${isHover}` || ""
  const inner = InnerLink ? "isInner" : ""
  const templ = template ? "template" : ""

  const events = internal ? (
    <Link
      to={newLink}
      data-testid="id"
      className={`baselink ${composedClassName} ${inner} ${templ}`}
    >
      {children}
    </Link>
  ) : (
    <a
      href={newLink}
      data-testid="id"
      className={`baselink ${composedClassName} ${inner} ${templ}`}
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
