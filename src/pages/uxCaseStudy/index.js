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
import { Container, Row, Col } from "react-bootstrap"
import "./index.scss"

const CaseStudies = () => {
  return (
    <Layout pagename="Home - Michelle Profile" className="overflowHidden">
      <Section background="White" inner heroSection>
        <Header />
        <img
          src={require("../../static/images/herrd/IMG_Hero_image.jpg")}
          alt="Hero Image"
          className="HeroImage"
        />
      </Section>
      <Section background="White" inner>
        <Container>
          <Flex>
            <FlexBox width="flex-300">
              <Heading type="h1" inner colour="spaceship">
                Herrd
              </Heading>
              <BulletSection bold inline>
                Time:
              </BulletSection>
              <BulletSection inline>10 weeks (Spring of 2020)</BulletSection>
              <br />
              <BulletSection bold inline>
                Role:
              </BulletSection>
              <BulletSection inline>Product Designer</BulletSection>
              <br />
              <BulletSection bold inline>
                Platform:
              </BulletSection>
              <BulletSection inline>iOS</BulletSection>
              <br />
              <BulletSection bold inline>
                Deliverables:
              </BulletSection>
              <BulletSection inline>
                Human interface guidelines app design prototype, responsive
                marketing site, and adaptative iPad UI
              </BulletSection>
              <br />
              <BulletSection bold inline>
                Type:
              </BulletSection>
              <BulletSection inline>Academic</BulletSection>
            </FlexBox>
            <FlexBox width="flex-800">
              <HighlightedQuotes>300</HighlightedQuotes>
            </FlexBox>
          </Flex>
        </Container>
      </Section>
    </Layout>
  )
}

export default CaseStudies
