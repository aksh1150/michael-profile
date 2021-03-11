import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { Header, ShareButton, NextPrevBtn } from "../../Components/molecules"
import {
  Heading,
  BulletSection,
  Section,
  BaseLink,
} from "../../Components/atoms"
import { Layout } from "../../Components/organisms"

import SocialMediaData from "../../data/SocialMedia"
import { Container, Row, Col } from "react-bootstrap"

import NewHTML from "./html"
import "./index.scss"

export const query = graphql`
  query {
    allContentfulCaseStudy(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          h1Heading
          slug
          bannerImage {
            fluid {
              src
            }
          }
          h1Heading
          firstH2Heading
          firstParagraph {
            firstParagraph
          }
          firstLayerH2FirstParagraph {
            firstLayerH2FirstParagraph
          }
          firstLayerH2SecondParagraph {
            firstLayerH2SecondParagraph
          }
          secondLayerLeftH1Heading
          secondLayerLeftH2Heading
          secondLayerLeftH3Heading
          secondLayerRightH1Heading
          secondLayerRightH2Heading
          secondLayerRightH3Heading
          secondLayerRightParagraph {
            secondLayerRightParagraph
          }
          secondLayerLeftParagraph {
            secondLayerLeftParagraph
          }
          thirdLayerParagraph {
            thirdLayerParagraph
          }
          thirdLayerCaption
          fourthLayerImage {
            fluid {
              src
            }
          }
          fourthLayerCaption
          fifthLayerH1Heading
          fifthLayerH2Heading
          fifthLayerH3Heading
          fifthLayerParagraph {
            fifthLayerParagraph
          }
        }
      }
    }
  }
`

const Graphics = props => {
  // console.log(NewHTML())
  const nextCaseStudy = props.data.allContentfulCaseStudy.edges

  const [active, setActive] = useState(0)
  const [bannerSrc, setBannerSrc] = useState("")
  const [h1Heading, setH1Heading] = useState("")
  const [firstParagraph, setFirstParagraph] = useState("")
  const [firstH2Heading, setFirstH2Heading] = useState("")
  const [firstLayerH2FirstParagraph, setFirstLayerH2FirstParagraph] = useState(
    ""
  )
  const [
    firstLayerH2SecondParagraph,
    setFirstLayerH2SecondParagraph,
  ] = useState("")

  const [secondLayerLeftH1Heading, setSecondLayerLeftH1Heading] = useState("")
  const [secondLayerLeftH2Heading, setSecondLayerLeftH2Heading] = useState("")
  const [secondLayerLeftH3Heading, setSecondLayerLeftH3Heading] = useState("")
  const [secondLayerLeftParagraph, setSecondLayerLeftParagraph] = useState("")
  const [secondLayerRightH1Heading, setSecondLayerRightH1Heading] = useState("")
  const [secondLayerRightH2Heading, setSecondLayerRightH2Heading] = useState("")
  const [secondLayerRightH3Heading, setSecondLayerRightH3Heading] = useState("")
  const [secondLayerRightParagraph, setSecondLayerRightParagraph] = useState("")

  const [thirdLayerParagraph, setThirdLayerParagraph] = useState("")
  const [thirdLayerCaption, setThirdLayerCaption] = useState("")

  const [fourthLayerImage, setFourthLayerImage] = useState("")
  const [fourthLayerCaption, setFourthLayerCaption] = useState("")

  const [fifthLayerH1Heading, setFifthLayerH1Heading] = useState("")
  const [fifthLayerH2Heading, setFifthLayerH2Heading] = useState("")
  const [fifthLayerH3Heading, setFifthLayerH3Heading] = useState("")
  const [fifthLayerParagraph, setFifthLayerParagraph] = useState("")

  const [loading, setLoading] = useState(true)
  async function setStates(caseStudy) {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    // await setHtmlContent(caseStudy.test.json)

    caseStudy.bannerImage
      ? setBannerSrc(caseStudy.bannerImage.fluid.src)
      : setBannerSrc("")

    setH1Heading(caseStudy.h1Heading)

    caseStudy.firstParagraph
      ? setFirstParagraph(caseStudy.firstParagraph.firstParagraph)
      : setFirstParagraph("")

    setFirstH2Heading(caseStudy.firstH2Heading)

    caseStudy.firstLayerH2FirstParagraph
      ? setFirstLayerH2FirstParagraph(
          caseStudy.firstLayerH2FirstParagraph.firstLayerH2FirstParagraph
        )
      : setFirstLayerH2FirstParagraph("")

    caseStudy.firstLayerH2SecondParagraph
      ? setFirstLayerH2SecondParagraph(
          caseStudy.firstLayerH2SecondParagraph.firstLayerH2SecondParagraph
        )
      : setFirstLayerH2SecondParagraph("")

    setSecondLayerLeftH1Heading(caseStudy.secondLayerLeftH1Heading)
    setSecondLayerLeftH2Heading(caseStudy.secondLayerLeftH2Heading)
    setSecondLayerLeftH3Heading(caseStudy.secondLayerLeftH3Heading)

    caseStudy.secondLayerLeftParagraph
      ? setSecondLayerLeftParagraph(
          caseStudy.secondLayerLeftParagraph.secondLayerLeftParagraph
        )
      : setSecondLayerLeftParagraph("")

    setSecondLayerRightH1Heading(caseStudy.secondLayerRightH1Heading)
    setSecondLayerRightH2Heading(caseStudy.secondLayerRightH2Heading)
    setSecondLayerRightH3Heading(caseStudy.secondLayerRightH3Heading)

    caseStudy.secondLayerRightParagraph
      ? setSecondLayerRightParagraph(
          caseStudy.secondLayerRightParagraph.secondLayerRightParagraph
        )
      : setSecondLayerRightParagraph("")

    caseStudy.thirdLayerParagraph
      ? setThirdLayerParagraph(
          caseStudy.thirdLayerParagraph.thirdLayerParagraph
        )
      : setThirdLayerParagraph("")

    setThirdLayerCaption(caseStudy.thirdLayerCaption)

    caseStudy.fourthLayerImage
      ? setFourthLayerImage(caseStudy.fourthLayerImage.fluid.src)
      : setFourthLayerImage("")

    setFourthLayerCaption(caseStudy.fourthLayerCaption)

    setFifthLayerH1Heading(caseStudy.fifthLayerH1Heading)
    setFifthLayerH2Heading(caseStudy.fifthLayerH2Heading)
    setFifthLayerH3Heading(caseStudy.fifthLayerH3Heading)
    caseStudy.fifthLayerParagraph
      ? setFifthLayerParagraph(
          caseStudy.fifthLayerParagraph.fifthLayerParagraph
        )
      : setFifthLayerParagraph("")
  }
  async function set() {
    const initialSates = await nextCaseStudy[0].node
    await setStates(initialSates)
    //  console.log(JSON.parse(htmlContent))
  }
  useEffect(() => {
    set().then(setLoading(false))
  }, [])

  const handleNextProject = async () => {
    var arr = nextCaseStudy.length
    var idx = active + 1
    idx = idx % arr

    setActive(idx)
    const caseStudy = nextCaseStudy[idx].node
    // await setHtmlContent(caseStudy.test.json)
    setStates(caseStudy)
  }

  const handlePrevProject = async () => {
    var arr = nextCaseStudy.length
    var idx = active

    if (idx === 0) {
      idx = arr - 1
    } else {
      idx = idx - 1
    }
    setActive(idx)
    const caseStudy = nextCaseStudy[idx].node
    //  await setHtmlContent(caseStudy.test.json)
    setStates(caseStudy)
  }

  function nextTitle(idx, arr) {
    var i = idx + 1
    i = i % arr.length
    return arr[i].node.h1Heading
  }

  function prevTitle(idx, arr) {
    if (idx === 0) {
      var i = arr.length - 1
    } else {
      var i = idx - 1
    }

    return arr[i].node.h1Heading
  }

  return (
    <Layout
      pagename="Home - Michelle Profile"
      className="overflowHidden template"
    >
      {loading ? (
        "Loading..."
      ) : (
        <>
          <Section background="White" inner heroSection>
            <Header />
            <div className="center-img">
              <img src={bannerSrc} className="HeroImage" alt="Banner Image" />
            </div>
          </Section>

          <Section background="White" inner>
            <Container className="t-mt-84">
              <Row>
                <Col lg={4} md={10} className="t-pr-55">
                  <Heading type="h1" inner colour="dark">
                    {h1Heading}
                  </Heading>
                  <BulletSection template>{firstParagraph}</BulletSection>
                </Col>
                <Col lg={8} md={12} className="pl-6 mt-2 t-pl-55">
                  <Heading type="h2" inner italic colour="dark">
                    {firstH2Heading}
                  </Heading>
                  <BulletSection template>
                    {firstLayerH2FirstParagraph}
                  </BulletSection>
                  <BulletSection template>
                    {firstLayerH2SecondParagraph}
                  </BulletSection>
                </Col>
              </Row>
            </Container>
          </Section>

          <Section background="White" inner>
            <Container className="t-mt-100">
              <Row>
                <Col lg={6} md={12} className="t-pr-50">
                  <Heading type="h1" inner colour="dark">
                    {secondLayerLeftH1Heading}
                  </Heading>
                  <Heading type="h2" inner italic colour="dark">
                    {secondLayerLeftH2Heading}
                  </Heading>
                  <Heading type="h3" inner colour="dark">
                    {secondLayerLeftH3Heading}
                  </Heading>
                  <BulletSection template>
                    {secondLayerLeftParagraph}
                  </BulletSection>
                </Col>
                <Col lg={6} md={12} className="t-pl-50">
                  <Heading type="h1" inner colour="dark">
                    {secondLayerRightH1Heading}
                  </Heading>
                  <Heading type="h2" inner italic colour="dark">
                    {secondLayerRightH2Heading}
                  </Heading>
                  <Heading type="h3" inner colour="dark">
                    {secondLayerRightH3Heading}
                  </Heading>
                  <BulletSection template>
                    {secondLayerRightParagraph}
                  </BulletSection>
                </Col>
              </Row>
            </Container>
          </Section>

          <Section background="white" inner>
            <Container className="t-mt-100">
              <Row>
                <Col lg={9} md={12}>
                  <BulletSection template>{thirdLayerParagraph}</BulletSection>
                  <BulletSection template caption>
                    {thirdLayerCaption}
                  </BulletSection>
                </Col>
              </Row>
            </Container>
          </Section>

          <Section background="White" inner>
            <Container className="t-mt-87">
              <Row>
                <Col lg={12} md={12}>
                  <img
                    src={fourthLayerImage}
                    className="secondImg"
                    alt="image"
                  />
                  <BulletSection template caption className="t-mt-20">
                    {fourthLayerCaption}
                  </BulletSection>
                </Col>
              </Row>
            </Container>
          </Section>

          <Section background="White" inner>
            <Container className="t-mt-100">
              <Row>
                <Col lg={9} md={12}>
                  <Heading type="h1" inner colour="dark">
                    {fifthLayerH1Heading}
                  </Heading>
                  <Heading type="h2" inner italic colour="dark">
                    {fifthLayerH2Heading}
                  </Heading>
                  <Heading type="h3" inner colour="dark">
                    {fifthLayerH3Heading}
                  </Heading>
                  <BulletSection template>{fifthLayerParagraph}</BulletSection>
                </Col>
              </Row>
            </Container>
          </Section>
          <Section background="White" inner>
            <Container className="t-mt-84">
              <Row>
                <Col md={12}>
                  <NewHTML active={active} />
                </Col>
              </Row>
            </Container>
          </Section>

          <Section background="White" inner>
            <Container className="t-mt-84">
              <Row>
                <Col lg={5} md={12}>
                  <BulletSection template>
                    Thank you for reading, contact me if you want to learn more
                    about this case study.
                  </BulletSection>
                </Col>
                <Col lg={3} md={12} />
                <Col lg={4} md={12}>
                  <ShareButton iconData={SocialMediaData} />
                </Col>
                {/* <Col md={12} className="t-mt-87">
                  {documentToReactComponents(NewHTML(), RICHTEXT_OPTIONS)}
                </Col> */}

                <Col sm={12} className="border-top t-mt-87">
                  <Row className="t-mt-100 t-mb-100">
                    <Col lg={2} md={3}>
                      <NextPrevBtn clickEvent={handlePrevProject}>
                        {prevTitle(active, nextCaseStudy)}
                      </NextPrevBtn>
                    </Col>
                    <Col lg={8} md={6} />
                    <Col lg={2} md={3}>
                      <NextPrevBtn rightArrow clickEvent={handleNextProject}>
                        {nextTitle(active, nextCaseStudy)}
                      </NextPrevBtn>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Section>
        </>
      )}
    </Layout>
  )
}

export default Graphics
