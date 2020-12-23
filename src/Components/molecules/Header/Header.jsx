import React from "react"
import { Logo, BaseLink } from "../../atoms"

import SocialMedia from "../SocialMedia"
import { Navbar, Nav } from "react-bootstrap"
import SocialMediaData from "../../../data/SocialMedia"

import "./Header.scss"

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="/" className="mr-auto">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav>
          <BaseLink link="uxCaseStudy" internal className="navLinks">
            UX Case Studies
          </BaseLink>
          <BaseLink link="/graphics" internal className="navLinks">
            Graphics
          </BaseLink>
          <BaseLink link="/about" internal className="navLinks">
            About
          </BaseLink>
          <SocialMedia data={SocialMediaData} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
