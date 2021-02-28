import React, { useState } from "react"
import { Logo, BaseLink } from "../../atoms"
import SocialMedia from "../SocialMedia"
import { Navbar, Nav } from "react-bootstrap"
import SocialMediaData from "../../../data/SocialMedia"
import Menu from "../../../data/MenuItems"

import "./Header.scss"

const Header = () => {
  const [isToggle, setIsToggle] = useState(false)

  // const toggled = () => {
  //   setIsToggle(!isToggle)
  //   // const el = document.querySelector("#responsive-navbar-nav")

  //   // el.classList.add("show")
  //   const el = document.querySelector("#responsive-navbar-nav")

  //   el.classList.add("show")
  // }

  // const toggledHide = () => {
  //   setIsToggle(!isToggle)

  //   const el = document.querySelector("#responsive-navbar-nav")
  //   if (el.classList.contains("show")) {
  //     el.classList.remove("show")
  //   }
  // }

  const handleCollapse = () => {
    const el = document.querySelector(".navbar .navbar-toggler")

    if (el.classList.contains("collapsed")) {
      el.style.color = "white"
      el.style.left = "auto"
      el.style.right = "25px"
      el.innerHTML = "X"
      return
    }
    el.innerHTML = '<span class="navbar-toggler-icon"></span>'
    el.style.left = "7%"
    el.style.right = "auto"
  }

  return (
    <div className="newNav">
      <Navbar collapseOnSelect expand="sm" variant="dark">
        <Navbar.Brand href="/" className="d-sm-block d-none">
          <Logo />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleCollapse}
        />

        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            {Menu.map(menuItems => (
              <BaseLink
                link={menuItems.link}
                internal
                className={`navLinks ${menuItems.space ? menuItems.space : ""}`}
                key={menuItems.link}
              >
                {menuItems.title}
              </BaseLink>
            ))}
            <SocialMedia
              data={SocialMediaData}
              className="d-lg-block d-sm-none d-none"
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
