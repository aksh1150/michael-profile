import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  Button,
  ShareButton,
  Slider,
  Header,
  Footer,
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
import { DownArrow } from "../static/icons/animate"

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
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const y3 = useTransform(scrollY, [1200, 2000], [0, 400])
  const y5 = useTransform(scrollY, [100, 500], [0, -100])
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
        <motion.div
          className="iconPosition down1 d-none d-lg-block"
          initial={{ x: -180 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          style={{ y: y5, x: 40 }}
        >
          <DownArrow />
        </motion.div>

        <motion.div
          className="iconPosition line1 d-none d-lg-block"
          initial={{ x: 100, y: -100 }}
          animate={{ x: 0, y: 0, scale: 3 }}
          transition={{ duration: 2 }}
          style={{ y: y2, x: 40 }}
        >
          <img src={require("../static/icons/line2.png")} alt="Line2" />
        </motion.div>

        <Container>
          <Row>
            <Col sm={5} md={5} lg={4} xl={5}></Col>
            <Col sm={7} md={7} lg={8} xl={7} className="marginTop2 noPaddings">
              <Paragraph size="xl" className="text-rights p3">
                {HomePage.bannerText1}
              </Paragraph>
              <Paragraph size="xl" className="d-xs-block d-sm-none">
                {HomePage.bannerText2}
              </Paragraph>

              <Row>
                <Col xs={12} sm={7} lg={6} xl={6} style={{ marginTop: 10 }}>
                  <Paragraph size="xs">{HomePage.bannerSubText}</Paragraph>
                </Col>
                <Col xs={12} sm={5} lg={6} xl={6} className="d-none d-sm-block">
                  <Paragraph size="xl" className="text-rights p2">
                    {HomePage.bannerText2}
                  </Paragraph>
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
              className="text-rights marginTop"
              style={{ zIndex: 9999 }}
            >
              <Button link="/uxCaseStudy" internal size="lg">
                {HomePage.bannerButtonText}
              </Button>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section background="Grey">
        <motion.div
          className="iconPosition line2 d-none d-lg-block"
          initial={{ x: -80, y: 80 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 2 }}
          // style={{ y: y1, x: -50 }}
        >
          <img src={require("../static/icons/line1.png")} alt="Line1" />
        </motion.div>
        <motion.div
          className="iconPosition line3 d-none d-lg-block"
          initial={{ x: -80, y: 80 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 2 }}
          // style={{ y: y4, x: -60 }}
        >
          <img src={require("../static/icons/line2.png")} alt="Line2" />
        </motion.div>
        <Container className="darkbg">
          <Row>
            <Col xs={12} sm={8} className>
              <Row>
                <Col xs={12}>
                  <Heading type="h1" colour="white">
                    {HomePage.aboutMeTitle}
                  </Heading>
                </Col>
                <Col xs={12}>
                  <Paragraph size="xs" fontcolour="white">
                    {HomePage.aboutMePara1.aboutMePara1}
                  </Paragraph>
                  <Paragraph size="xs" fontcolour="white">
                    {HomePage.aboutMePara2.aboutMePara2}
                  </Paragraph>
                  <Paragraph size="xs" fontcolour="white">
                    {HomePage.aboutMePara3.aboutMePara3}
                  </Paragraph>
                </Col>
                <Col xs={12} className="marginTop3">
                  <Button link="/uxCaseStudy" internal size="lg">
                    {HomePage.aboutMeButtonText}
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
        <motion.div
          className="iconPosition down2 d-none d-lg-block"
          style={{ y: y3, x: -40 }}
        >
          <DownArrow />
        </motion.div>
        <Container>
          <Row>
            <Col xs={12} className="marginTop2 paddingLeft">
              <Heading type="h1" colour="white">
                {HomePage.myWorkTitle}
              </Heading>
              <Row onMouseLeave={mouseLeave}>
                <Col xs={12} md={5}>
                  <div onMouseEnter={mouseEnter} role="button" tabIndex="0">
                    <Paragraph
                      size="md"
                      className={`underline ${showLinks ? "hover" : ""}`}
                    >
                      Product
                    </Paragraph>
                  </div>
                  <div onMouseEnter={mouseEnter2} role="button" tabIndex="0">
                    <Paragraph
                      size="md"
                      className={`underline ${showLinks2 ? "hover" : ""}`}
                    >
                      Graphic
                    </Paragraph>
                  </div>
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
                      {HomePage.productGraphicsLinksName.map(link => (
                        <Paragraph size="sm" fontcolour="white" key={link.id}>
                          {link.value}
                        </Paragraph>
                      ))}
                    </BaseLink>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </Col>
            <Col xs={12} className="marginTop4 paddingLeft">
              <Slider slideData={HomePage.testimonialTitle} />
            </Col>
          </Row>
        </Container>
      </Section>
      <Container className="footerContainer">
        <Row>
          <Col xs={12} sm={8} lg={9}>
            <Heading type="h1" colour="blue">
              {HomePage.footerTitle}
            </Heading>
            <Paragraph size="xs">{HomePage.footerText}</Paragraph>
          </Col>
          <Col xs={12} sm={4} lg={3}>
            <ShareButton iconData={SocialMediaData} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </Layout>
  )
}
export default Home
