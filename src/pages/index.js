import React from "react"
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Footer, Button, ShareButton, Slider } from "../Components/molecules"
import { Heading, Paragraph } from "../Components/atoms"
import { BaseLink } from "../Components/atoms"

import SocialMediaData from "../data/SocialMedia"
import SliderData from "../data/Slider"

const Home = () => {
  return (
    <div>
      <Heading type="h1">Hello</Heading>
      <Paragraph size="lg">Thi si stext Paragraph</Paragraph>
      <Link to="/uxCaseStudy">UX Case Studies</Link>
      <Button link="/uxCaseStudy" internal size="lg">
        Large button
      </Button>
      <br />
      <Button link="/uxCaseStudy" internal>
        Small button
      </Button>{" "}
      <ShareButton iconData={SocialMediaData} />
      <Slider slideData={SliderData} />
      <Footer />
    </div>
  )
}
export default Home
