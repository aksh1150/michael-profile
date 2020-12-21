import React from "react"
import { Link } from "gatsby"
import { Footer, Button, ShareButton } from "../Components/molecules"
import { BaseLink } from "../Components/atoms"

const Home = () => {
  const iconMap = [
    {
      link: "https://abc.com",
      icon: "email_icon",
    },
    {
      link: "https://facebook.com",
      icon: "FB_icon",
    },
    {
      link: "https://linkedin.com",
      icon: "linkedin_icon",
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
