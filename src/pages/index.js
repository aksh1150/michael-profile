import React from "react"
import { Link } from "gatsby"
import { Footer, Button, ShareButton } from "../Components/molecules"
import { BaseLink } from "../Components/atoms"
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
const Home = () => {
  const iconMap = [
    {
      link: "https://abc.com",
      icon: faEnvelope,
    },
    {
      link: "https://facebook.com",
      icon: faFacebook,
    },
    {
      link: "https://linkedin.com",
      icon: faLinkedin,
    },
  ]
  return (
    <div>
      <h1>Hello</h1>
      <Link to="/uxCaseStudy">UX Case Studies</Link>
      <Button link="/uxCaseStudy" internal size="lg">
        Large button
      </Button>
      <br />
      <Button link="/uxCaseStudy" internal>
        Small button
      </Button>{" "}
      <ShareButton iconData={iconMap} />
      <Footer />
    </div>
  )
}
export default Home
