import React from "react"
import { graphql } from "gatsby"
import { Header, ShareButton, NextPrevBtn } from "../../Components/molecules"
import { Heading, BulletSection, Section } from "../../Components/atoms"
import { Layout } from "../../Components/organisms"

import SocialMediaData from "../../data/SocialMedia"
import { Container, Row, Col } from "react-bootstrap"
import "./index.scss"

// query {
//   allContentfulCaseStudy(sort: { fields: createdAt, order: DESC }) {
//     edges {
//       node {
//         h1Heading
//         slug
//         bannerImage {
//           fluid {
//             src
//           }
//         }
//         h1Heading
//         firstH2Heading
//         firstParagraph {
//           firstParagraph
//         }
//         firstLayerH2FirstParagraph {
//           firstLayerH2FirstParagraph
//         }
//         firstLayerH2SecondParagraph {
//           firstLayerH2SecondParagraph
//         }
//         secondLayerLeftH1Heading
//         secondLayerLeftH2Heading
//         secondLayerLeftH3Heading
//         secondLayerRightH1Heading
//         secondLayerRightH2Heading
//         secondLayerRightH3Heading
//         secondLayerRightParagraph {
//           secondLayerRightParagraph
//         }
//         secondLayerLeftParagraph {
//           secondLayerLeftParagraph
//         }
//         thirdLayerParagraph {
//           thirdLayerParagraph
//         }
//         thirdLayerCaption
//         fourthLayerImage {
//           fluid {
//             src
//           }
//         }
//         fourthLayerCaption
//         fifthLayerH1Heading
//         fifthLayerH2Heading
//         fifthLayerH3Heading
//         fifthLayerParagraph {
//           fifthLayerParagraph
//         }
//       }
//     }
//   }
// }
export const query = graphql`
  query($slug: String!) {
    contentfulCaseStudy(slug: { eq: $slug }) {
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
    allContentfulCaseStudy(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          h1Heading
          slug
        }
      }
    }
  }
`

const Graphics = props => {
  const caseStudy = props.data.contentfulCaseStudy

  const nextCaseStudy = props.data.allContentfulCaseStudy.edges

  let newCaseStudies = []

  nextCaseStudy.map(val => {
    if (val.node.h1Heading !== caseStudy.h1Heading) {
      newCaseStudies.push({
        title: val.node.h1Heading,
        slug: val.node.slug,
      })
    }
  })

  let i = 0

  function nextItem() {
    i = i + 1 // increase i by one
    i = i % newCaseStudies.length // if we've gone too high, start from `0` again\

    return newCaseStudies[i] // give us back the item of where we are now
  }

  function prevItem() {
    if (i === 0) {
      // i would become 0
      i = newCaseStudies.length // so put it at the other end of the array
    }
    i = i - 1 // decrease by one

    return newCaseStudies[i] // give us back the item of where we are now
  }
  console.log("Next", nextItem())
  console.log("Prev", prevItem())
  // window.addEventListener("load", function () {
  //   document.getElementById("output").textContent = newCaseStudies[0].title // initial value
  //   // document.getElementById("next_button").innerText = newCaseStudies[1].t
  //   document.getElementById("prev_button").addEventListener(
  //     "click", // we want to listen for a click
  //     function (e) {
  //       // the e here is the event itself
  //       document.getElementById("output").textContent = prevItem()
  //     }
  //   )

  //   document.getElementById("next_button").addEventListener(
  //     "click", // we want to listen for a click
  //     function (e) {
  //       // the e here is the event itself
  //       document.getElementById("output").textContent = nextItem()
  //       document.getElementById("next_button").innerText = nextItem()
  //     }
  //   )
  // })

  return (
    <Layout
      pagename="Home - Michelle Profile"
      className="overflowHidden template"
    >
      <Section background="White" inner heroSection>
        <Header />
        <div className="center-img">
          <img
            src={caseStudy.bannerImage ? caseStudy.bannerImage.fluid.src : ""}
            className="HeroImage"
            alt="Banner Image"
          />
        </div>
      </Section>
      <Section background="White" inner>
        <Container className="t-mt-84">
          <Row>
            <Col lg={4} md={10} className="t-pr-55">
              <Heading type="h1" inner colour="dark">
                {caseStudy.h1Heading}
              </Heading>
              <BulletSection template>
                {caseStudy.firstParagraph
                  ? caseStudy.firstParagraph.firstParagraph
                  : ""}
              </BulletSection>
            </Col>
            <Col lg={8} md={12} className="pl-6 mt-2 t-pl-55">
              <Heading type="h2" inner italic colour="dark">
                {caseStudy.firstH2Heading}
              </Heading>
              <BulletSection template>
                {caseStudy.firstLayerH2FirstParagraph
                  ? caseStudy.firstLayerH2FirstParagraph
                      .firstLayerH2FirstParagraph
                  : ""}
              </BulletSection>
              <BulletSection template>
                {caseStudy.firstLayerH2SecondParagraph
                  ? caseStudy.firstLayerH2SecondParagraph
                      .firstLayerH2SecondParagraph
                  : ""}
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
                {caseStudy.secondLayerLeftH1Heading}
              </Heading>
              <Heading type="h2" inner italic colour="dark">
                {caseStudy.secondLayerLeftH2Heading}
              </Heading>
              <Heading type="h3" inner colour="dark">
                {caseStudy.secondLayerLeftH3Heading}
              </Heading>
              <BulletSection template>
                {caseStudy.secondLayerLeftParagraph
                  ? caseStudy.secondLayerLeftParagraph.secondLayerLeftParagraph
                  : ""}
              </BulletSection>
            </Col>
            <Col lg={6} md={12} className="t-pl-50">
              <Heading type="h1" inner colour="dark">
                {caseStudy.secondLayerRightH1Heading}
              </Heading>
              <Heading type="h2" inner italic colour="dark">
                {caseStudy.secondLayerRightH2Heading}
              </Heading>
              <Heading type="h3" inner colour="dark">
                {caseStudy.secondLayerRightH3Heading}
              </Heading>
              <BulletSection template>
                {caseStudy.secondLayerRightParagraph
                  ? caseStudy.secondLayerRightParagraph
                      .secondLayerRightParagraph
                  : ""}
              </BulletSection>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section background="white" inner>
        <Container className="t-mt-100">
          <Row>
            <Col lg={9} md={12}>
              <BulletSection template>
                {caseStudy.thirdLayerParagraph
                  ? caseStudy.thirdLayerParagraph.thirdLayerParagraph
                  : ""}
              </BulletSection>
              <BulletSection template caption>
                {caseStudy.thirdLayerCaption}
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
                src={
                  caseStudy.fourthLayerImage
                    ? caseStudy.fourthLayerImage.fluid.src
                    : ""
                }
                className="secondImg"
                alt="image"
              />
              <BulletSection template caption className="t-mt-20">
                {caseStudy.fourthLayerCaption}
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
                {caseStudy.fifthLayerH1Heading}
              </Heading>
              <Heading type="h2" inner italic colour="dark">
                {caseStudy.fifthLayerH2Heading}
              </Heading>
              <Heading type="h3" inner colour="dark">
                {caseStudy.fifthLayerH3Heading}
              </Heading>
              <BulletSection template>
                {caseStudy.fifthLayerParagraph
                  ? caseStudy.fifthLayerParagraph.fifthLayerParagraph
                  : ""}
              </BulletSection>
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

            <Col sm={12} className="border-top t-mt-87">
              <Row className="t-mt-100 t-mb-100">
                <Col lg={2} md={3}>
                  <NextPrevBtn link={`/caseStudy/${prevItem().slug}`} internal>
                    {prevItem().title}
                  </NextPrevBtn>
                </Col>
                <Col lg={8} md={6} />
                <Col lg={2} md={3}>
                  <NextPrevBtn
                    rightArrow
                    link={`/caseStudy/${nextItem().slug}`}
                    internal
                  >
                    {nextItem().title}
                  </NextPrevBtn>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}

export default Graphics
