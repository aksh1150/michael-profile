import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Footer, Button, ShareButton, Slider } from "../Components/molecules"
import { BaseLink } from "../Components/atoms"

import SocialMediaData from "../data/SocialMedia"

const Home = () => {
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
      <ShareButton iconData={SocialMediaData} />
      <Slider />
      <Footer />
    </div>
  )
}
export default Home
