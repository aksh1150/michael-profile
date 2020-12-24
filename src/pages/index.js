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
              className="marginTop2"
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
            <Col xs={12} sm={5} className="text-center marginTop">
              <Button link="/uxCaseStudy" internal>
                UX Case Studies
              </Button>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section background="Grey">
        <Container className="darkbg">
          <Row>
            <Col sm={12} md={8} className>
              <Row>
                <Col xs={12}>
                  <Heading type="h1" colour="white">
                    About Me
                  </Heading>
                </Col>
                <Col xs={12}>
                  <Paragraph size="xs" fontcolour="white">
                    A Product Designer living in Toronto with an extensive
                    graphic design background. Encapsulating the visions of each
                    brand I had the pleasure to work with, I designed an array
                    of promotional graphics, brand identities, and web designs.
                  </Paragraph>
                  <Paragraph size="xs" fontcolour="white">
                    The transition to Product Design not only satisfy my
                    curiosity in solving problems through a human-centered
                    approach, but it also made my design decision more
                    impactful.
                  </Paragraph>
                  <Paragraph size="xs" fontcolour="white">
                    On a typical day, when I am not working, you will find me
                    daydreaming about how I can contribute to building a more
                    inclusive world for my daughter until I hear her calling,
                    ”Mommy, come play with me.”
                  </Paragraph>
                </Col>
                <Col xs={12} className="marginTop1">
                  <Button link="/uxCaseStudy" internal size="lg">
                    Request My Resume
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={4} className="secondLayerHeight">
              <img
                src={require("../static/images/michas.png")}
                alt="Michelle"
                className="imageBottom"
              />
            </Col>
          </Row>
        </Container>
      </Section>

      <Section background="Primary">
        <Container>
          <Row>
            <Col xs={12} className="marginTop2">
              <Heading type="h1" colour="white">
                My Works
              </Heading>
              <Row>
                <Col xs={12} md={5}>
                  <Paragraph size="md" className="underline">
                    Product
                  </Paragraph>
                  <Paragraph size="md" className="underline">
                    Graphic
                  </Paragraph>
                </Col>
                <Col xs={12} md={3}>
                  <img src={require("../static/icons/arrow.svg")} alt="Arrow" />
                </Col>
                <Col xs={12} md={4}>
                  <Paragraph size="sm" fontcolour="white">
                    <BaseLink internal link="/">
                      Herrd
                    </BaseLink>
                  </Paragraph>
                  <Paragraph size="sm" fontcolour="white">
                    <BaseLink internal link="/">
                      thebabyshop.com
                    </BaseLink>
                  </Paragraph>
                  <Paragraph size="sm" fontcolour="white">
                    <BaseLink internal link="/">
                      Figo Bank
                    </BaseLink>
                  </Paragraph>
                  <Paragraph size="sm" fontcolour="white">
                    <BaseLink internal link="/">
                      EY Hackathon
                    </BaseLink>
                  </Paragraph>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}
export default Home
