import React, { useState } from "react"
import { LinkButton, Header, ImageEnlarge } from "../../Components/molecules"
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
          
        </Row>
        </Container>
        </Section>
     
    </Layout>
  )
}
export default TheBabyShop
