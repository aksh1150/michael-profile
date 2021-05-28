import React, { useState } from "react"
import { LinkButton, Header, ImageEnlarge, NextPrevBtn } from "../../Components/molecules"
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
      pagename="Home - Michelle Profile"
      className="overflowHidden uxDesign globalStyle"
    >
      
        <Header />
      <Section background="White" inner>
        <Container><Row>
          <Col lg={12}>
            <img
              src={require("../../static/images/theBabyShop/baby.png")}
              alt="The baby shop"
              className="d-md-block d-none"
            />
          </Col>
          
          <Col sm={12} className="border-top t-mt-87">
                  <Row className="t-mt-100 t-mb-100">
                    <Col lg={3} md={3}>
                     <NextPrevBtn>
                         <BaseLink
                            InnerLink
                            link="/uxCaseStudy"
                          >
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
