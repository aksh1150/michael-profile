import React, { useState } from "react"
import {
  LinkButton,
  Header,
  ImageEnlarge,
  NextPrevBtn,
} from "../../Components/molecules"
import {
  BaseLink,
  Heading,
  HighlightedQuotes,
  BulletSection,
  Quote,
  Section,
  PopUp,
} from "../../Components/atoms"
import { Layout } from "../../Components/organisms"
import { Container, Row, Col } from "react-bootstrap"
import "./index.scss"

const TheBabyShop = () => {
  return (
    <Layout
      pagename="The baby shop"
      className="overflowHidden uxDesign globalStyle"
    >
      <Section background="White" inner heroSection>
        <Header />
        <Container>
          <Row>
            <Col lg={12}>
              <img
                src={require("../../static/images/theBabyShop/banner.png")}
                alt="Hero Image"
                className="HeroImage  d-md-block d-none"
              />
              <img
                src={require("../../static/images/theBabyShop/banner.png")}
                alt="Hero Image"
                className="HeroImage  d-md-none d-block"
              />
            </Col>
          </Row>
        </Container>
      </Section>

      <Section background="White" inner>
        <Container>
          <Row>
            <Col lg={3} md={10} className="mt-5">
              <Heading type="h1" inner colour="black" className="mb-4">
                the babyshop.com
              </Heading>
              <BulletSection bold inline>
                Time:
              </BulletSection>
              <BulletSection inline>6 months (2014)</BulletSection>
              <br />
              <BulletSection bold inline>
                Role:
              </BulletSection>
              <BulletSection inline>
                Product Designer/Art Director
              </BulletSection>
              <br />
              <BulletSection bold inline>
                Platform:
              </BulletSection>
              <BulletSection inline>Native app and desktop</BulletSection>
              <br />
              <BulletSection bold inline>
                Deliverables:
              </BulletSection>
              <BulletSection inline>
                Rebranding, social media promotion, direct mailing, UI and UX
                across platforms
              </BulletSection>
              <br />
              <BulletSection bold inline>
                Type:
              </BulletSection>
              <BulletSection inline>Professional</BulletSection>
            </Col>
            <Col lg={9} md={10} className="pl-6 mt-5">
              <Heading type="h2" inner colour="primary" italic>
                Introduction
              </Heading>
              <BulletSection className="mt-33">
                thebabyshop.com first started as a high-end clothing boutique
                for children. The company eventually adapted to a new product
                line with a customer need pivot. I am tasked to integrate the
                best UI and UX practices on the redesign of the website, mobile
                site, and all corporate promotional graphics that align with the
                new business relaunch.
              </BulletSection>
              <Heading
                type="h2"
                inner
                italic
                colour="primary"
                className="mt-5 mb-4"
              >
                The Constraints
              </Heading>
              <BulletSection bold inline>
                Technical:
              </BulletSection>
              <BulletSection inline>
                Back-end CMS editing capability limits the freedom of how UI
                elements can be laid out.
              </BulletSection>
              <br />
              <BulletSection bold inline>
                Socio-cultural:
              </BulletSection>
              <BulletSection inline>
                Safety is the primary concern for children's products. Parents
                prefer to buy from a store where they can examine the quality
                first hand.
              </BulletSection>
              <br />
              <BulletSection bold inline>
                Time:
              </BulletSection>
              <BulletSection inline>
                Daily or weekly design sprints.
              </BulletSection>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section background="White" inner>
        <Container>
          <Row>
            {/* <Col lg={12}>
              <img
                src={require("../../static/images/theBabyShop/baby.png")}
                alt="The baby shop"
                className="d-md-block d-none"
              />
            </Col> */}

            <Col sm={12} className="border-top t-mt-87">
              <Row className="t-mt-100 t-mb-100">
                <Col lg={3} md={3}>
                  <NextPrevBtn>
                    <BaseLink InnerLink link="/uxCaseStudy">
                      Herrd
                    </BaseLink>
                  </NextPrevBtn>
                </Col>
                <Col lg={6} md={6} />
                <Col lg={3} md={3}>
                  {/* <NextPrevBtn rightArrow>
                         <BaseLink
                            InnerLink
                            link="/theBabyShop"
                          >
                            The Baby Shop
                        </BaseLink>
                      </NextPrevBtn> */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}
export default TheBabyShop
