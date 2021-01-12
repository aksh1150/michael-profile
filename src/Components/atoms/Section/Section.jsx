import React from "react"
import "./Section.scss"

const Section = ({
  id,
  className,
  children,
  style,
  background,
  inner,
  heroSection,
}) => {
  const ComposedClassnames = `${className ? className : ""} ${
    background ? background : ""
  } ${inner ? "inner" : ""} ${heroSection ? "heroSection" : ""}`
  return (
    <section id={id} className={`Section ${ComposedClassnames}`} style={style}>
      {children}
    </section>
  )
}
export default Section
