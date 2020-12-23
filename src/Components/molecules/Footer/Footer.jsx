import React from "react"
import { Paragraph, BaseLink } from "../../atoms"
import "./Footer.scss"
const Footer = () => {
  return (
    <footer>
      <Paragraph size="xs">
        Copyright by{" "}
        <BaseLink link="https://designmicha.com">designmicha.com</BaseLink> @
        {new Date().getFullYear()}. All rights reserved.
      </Paragraph>
    </footer>
  )
}
export default Footer
