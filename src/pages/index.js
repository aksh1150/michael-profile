import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, ShareButton, Slider, Header } from "../Components/molecules"
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
import { DownArrow, Line } from "../static/icons/animate"

import { useViewportScroll, motion, useTransform } from "framer-motion"

const Home = () => {
  const query = useStaticQuery(graphql`
    query {
      contentfulHomePage {
        bannerText1
        bannerText2
        bannerSubText
        bannerText3
        bannerButtonText
        aboutMeTitle
        aboutMePara1 {
          aboutMePara1
        }
        aboutMePara2 {
          aboutMePara2
        }
        aboutMePara3 {
          aboutMePara3
        }
        aboutMeButtonText
        myWorkTitle
        footerTitle
        footerText
        footerButtonTitle
        productGraphicsLinksName {
          id
          value
        }
        testimonialTitle {
          id
          title
          testimonial
        }
      }
    }
  `)

  const HomePage = query.contentfulHomePage

  const [showLinks, setShowLinks] = useState(false)
  const [showLinks2, setShowLinks2] = useState(false)

  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 150])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const y3 = useTransform(scrollY, [1000, 2000], [0, 500])
  const y4 = useTransform(scrollY, [500, 1000], [0, 500])
  const mouseEnter = () => {
    setShowLinks(true)
    setShowLinks2(false)
  }
  const mouseEnter2 = () => {
    setShowLinks2(true)
    setShowLinks(false)
  }
  const mouseLeave = () => {
    setShowLinks(false)
    setShowLinks2(false)
  }
  return (
    <Layout pagename="Home - Michelle Profile" className="overflowHidden">
      <Section background="Grey">
        <Header />
        <motion.div className="iconPosition down1" style={{ y: y2, x: 40 }}>
          <DownArrow />
        </motion.div>

        <Container>
          <Row>
            <Col
              xs={{ span: 0, offset: 0 }}
              sm={{ span: 8, offset: 3 }}
              md={{ span: 8, offset: 4 }}
              lg={{ span: 8, offset: 4 }}
              xl={{ span: 8, offset: 6 }}
              className="marginTop2"
            >
              <Paragraph size="xl">{HomePage.bannerText1}</Paragraph>
              <Paragraph size="xl" className="d-xs-block d-sm-none">
                {HomePage.bannerText2}
              </Paragraph>

              <Row>
                <Col xs={12} sm={7} lg={6} xl={5}>
                  <Paragraph size="xs">{HomePage.bannerSubText}</Paragraph>
                </Col>
                <Col xs={12} sm={5} lg={6} xl={7} className="d-none d-sm-block">
                  <Paragraph size="xl">{HomePage.bannerText2}</Paragraph>
                </Col>
              </Row>
            </Col>

            <Col xs={12} sm={6} lg={6} xl={5} className="paddingLeft">
              <Paragraph size="lg" fontcolour="grey">
                {HomePage.bannerText3}
              </Paragraph>
            </Col>
            <Col xs={12} sm={1} lg={1} xl={1} className="text-center">
              <ScrollDown />
            </Col>
            <Col
              xs={12}
              sm={4}
              lg={4}
              xl={5}
              className="text-center marginTop"
              style={{ zIndex: 9999 }}
            >
              <Button link="/uxCaseStudy" internal>
                UX Case Studies
              </Button>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section background="Grey">
        <motion.div className="iconPosition line2" style={{ y: y1, x: -50 }}>
          <Line />
        </motion.div>
        <motion.div className="iconPosition line3" style={{ y: y4, x: -40 }}>
          <Line />
        </motion.div>
        <Container className="darkbg">
          <Row>
            <Col xs={12} sm={8} className>
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
            <Col sm={4} className="secondLayerHeight d-none d-sm-block">
              <img
                src={require("../static/images/michas.png")}
                alt="Michelle"
                className="imageBottom"
              />
            </Col>
          </Row>
        </Container>
      </Section>

      <Section background="Primary" className="autoHeight">
        <motion.div className="iconPosition down2" style={{ y: y3, x: -40 }}>
          <DownArrow />
        </motion.div>
        <Container>
          <Row>
            <Col xs={12} className="marginTop2 paddingLeft">
              <Heading type="h1" colour="white">
                My Works
              </Heading>
              <Row onMouseLeave={mouseLeave}>
                <Col xs={12} md={5}>
                  <Paragraph
                    size="md"
                    className={`underline ${showLinks ? "hover" : ""}`}
                    onMouseEnter={mouseEnter}
                  >
                    Product
                  </Paragraph>
                  <Paragraph
                    size="md"
                    className={`underline ${showLinks2 ? "hover" : ""}`}
                    onMouseEnter={mouseEnter2}
                  >
                    Graphic
                  </Paragraph>
                </Col>
                <Col xs={12} md={3} className="d-none d-sm-block">
                  {showLinks || showLinks2 ? (
                    <img
                      src={require("../static/icons/arrow.svg")}
                      alt="Arrow"
                    />
                  ) : (
                    ""
                  )}
                </Col>
                <Col xs={12} md={4}>
                  {showLinks || showLinks2 ? (
                    <BaseLink link="/uxCaseStudy" internal>
                      <Paragraph size="sm" fontcolour="white">
                        Herrd
                      </Paragraph>
                      <Paragraph size="sm" fontcolour="white">
                        thebabyshop.com
                      </Paragraph>
                      <Paragraph size="sm" fontcolour="white">
                        Figo Bank
                      </Paragraph>
                      <Paragraph size="sm" fontcolour="white">
                        EY Hackathon
                      </Paragraph>
                    </BaseLink>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Col>
            <Col xs={12} className="marginTop4 paddingLeft">
              <Slider slideData={SliderData} />
            </Col>
          </Row>
        </Container>
      </Section>
      <Container className="footerContainer">
        <Row>
          <Col xs={12} sm={8} lg={9}>
            <Heading type="h1" colour="blue">
              Want to chat?
            </Heading>
            <Paragraph size="xs">Me too! Can't wait to hear from you</Paragraph>
          </Col>
          <Col xs={12} sm={4} lg={3}>
            <ShareButton iconData={SocialMediaData} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export default Home
