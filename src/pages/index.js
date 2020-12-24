import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  Footer,
  Button,
  ShareButton,
  Slider,
  Header,
} from "../Components/molecules"
import {
  Heading,
  Paragraph,
  ScrollDown,
  Section,
  BaseLink,
} from "../Components/atoms"

import { Layout } from "../Components/organisms"

import SocialMediaData from "../data/SocialMedia"
import SliderData from "../data/Slider"

const Home = () => {
  return (
    <Layout menuBackground="Grey">
      <Section background="Grey">
        <Heading type="h1">Hello</Heading>
        <Paragraph size="lg">Thi si stext Paragraph</Paragraph>
        <ShareButton iconData={SocialMediaData} />
        <Slider slideData={SliderData} />
      </Section>
    </Layout>
    // <div>
    //   <Header />
    //   <div className="text-center">
    //     <ScrollDown />
    //   </div>
    //   <Heading type="h1">Hello</Heading>
    //   <Paragraph size="lg">Thi si stext Paragraph</Paragraph>
    //   <Section background="Grey" />
    //   <BaseLink link="/uxCaseStudy" internal>
    //     UX Case Studies
    //   </BaseLink>
    //   <Button link="/uxCaseStudy" internal size="lg">
    //     Large button
    //   </Button>
    //   <br />
    //   <Button link="/uxCaseStudy" internal>
    //     Small button
    //   </Button>{" "}
    //   <ShareButton iconData={SocialMediaData} />
    //   <Slider slideData={SliderData} />
    //   <Footer />
    // </div>
  )
}
export default Home
