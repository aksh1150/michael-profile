import React from "react"
import {
  LinkButton,
  Header,
  HeroImage,
  FlexBox,
} from "../../Components/molecules"
import {
  BaseLink,
  Heading,
  HighlightedQuotes,
  BulletSection,
  Quote,
  Section,
  Flex,
} from "../../Components/atoms"
import { Layout } from "../../Components/organisms"

import "./index.scss"

const CaseStudies = () => {
  return (
    <Layout pagename="Home - Michelle Profile" className="overflowHidden">
      <Section background="white" inner heroSection>
        <Header />
        <img
          src={require("../../static/images/herrd/IMG_Hero_image.jpg")}
          alt="Hero Image"
          className="HeroImage"
        />
      </Section>
      <Section background="white">
        <Flex>
          <FlexBox width="flex-300">
            <HighlightedQuotes>300</HighlightedQuotes>
          </FlexBox>
          <FlexBox width="flex-800">
            <HighlightedQuotes>300</HighlightedQuotes>
          </FlexBox>
        </Flex>
      </Section>
    </Layout>
  )
}

export default CaseStudies
