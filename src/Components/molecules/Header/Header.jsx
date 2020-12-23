import React from "react"
import { Logo, BaseLink } from "../../atoms"

import SocialMedia from "../SocialMedia"
import { Navbar, Nav } from "react-bootstrap"
import SocialMediaData from "../../../data/SocialMedia"
import Menu from "../../../data/MenuItems"

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
          {Menu.map(menuItems => (
            <BaseLink
              link={menuItems.link}
              internal
              className="navLinks"
              key={menuItems.link}
            >
              {menuItems.title}
            </BaseLink>
          ))}
          <SocialMedia data={SocialMediaData} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
