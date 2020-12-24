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

import { Container, Row, Col } from "react-bootstrap"

import { Layout } from "../Components/organisms"

import SocialMediaData from "../data/SocialMedia"
import SliderData from "../data/Slider"

const Home = () => {
  return (
    <Layout pagename="Home - Michelle Profile">
      <Section background="Grey">
        <Header />
        <Container>
          <Row>
            <Col
              xs={{ span: 0, offset: 0 }}
              sm={{ span: 8, offset: 2 }}
              md={{ span: 8, offset: 2 }}
              lg={{ span: 8, offset: 4 }}
              xl={{ span: 8, offset: 6 }}
            >
              <Paragraph size="xl">Michelle</Paragraph>

              <Row>
                <Col xs={12} sm={8} lg={6} xl={5}>
                  <Paragraph size="xs">
                    Building holistic user-centered experience for digital
                    products
                  </Paragraph>
                </Col>
                <Col xs={12} sm={4} lg={6} xl={7}>
                  <Paragraph size="xl">Lam</Paragraph>
                </Col>
              </Row>
            </Col>

            <Col xs={12} sm={5}>
              <Paragraph size="lg" fontcolour="grey">
                Product Designer
              </Paragraph>
            </Col>
            <Col xs={12} sm={1} className="text-center">
              <ScrollDown />
            </Col>
            <Col xs={12} sm={5} className="text-center">
              <Button link="/uxCaseStudy" internal size="lg">
                UX Case Studies
              </Button>
            </Col>
          </Row>
        </Container>
        {/* <Heading type="h1">Hello</Heading>
        <Paragraph size="lg">Thi si stext Paragraph</Paragraph>
        <ShareButton iconData={SocialMediaData} />
        <Slider slideData={SliderData} /> */}
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
