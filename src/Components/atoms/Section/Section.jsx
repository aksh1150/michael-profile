import React from "react"
import "./Section.scss"

const Section = ({ id, className, children, style, background }) => {
  const ComposedClassnames = `${className ? className : ""} ${
    background ? background : ""
  }`
  return (
    <section id={id} className={`Section ${ComposedClassnames}`} style={style}>
      {children}
    </section>
  )
}
export default Section
