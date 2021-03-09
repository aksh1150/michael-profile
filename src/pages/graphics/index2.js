import React, { useState } from "react"
import { Header, ShareButton, NextPrevBtn } from "../../Components/molecules"
import { Heading, BulletSection, Section } from "../../Components/atoms"
import { Layout } from "../../Components/organisms"

import SocialMediaData from "../../data/SocialMedia"
import { Container, Row, Col } from "react-bootstrap"
import "./index.scss"

const Graphics = () => {
  return (
    <Layout
      pagename="Home - Michelle Profile"
      className="overflowHidden template"
    >
      <Section background="White" inner heroSection>
        <Header />
        <div className="center-img">
          <div className="HeroImage placeHolder">
            <Heading type="h2">Hero Image</Heading>
          </div>
        </div>
      </Section>
      <Section background="White" inner>
        <Container className="t-mt-84">
          <Row>
            <Col lg={4} md={10} className="t-pr-55">
              <Heading type="h1" inner colour="dark">
                H1 head
              </Heading>
              <BulletSection template>
                ontrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 .
              </BulletSection>
            </Col>
            <Col lg={8} md={12} className="pl-6 mt-2 t-pl-55">
              <Heading type="h2" inner italic colour="dark">
                H2 heading
              </Heading>
              <BulletSection template>
                ontrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC.
              </BulletSection>
              <BulletSection template>
                ontrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33.
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
                H1 heading
              </Heading>
              <Heading type="h2" inner italic colour="dark">
                H2 heading
              </Heading>
              <Heading type="h3" inner colour="dark">
                H3 heading
              </Heading>
              <BulletSection template>
                ontrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33.
              </BulletSection>
            </Col>
            <Col lg={6} md={12} className="t-pl-50">
              <Heading type="h1" inner colour="dark">
                H1 heading
              </Heading>
              <Heading type="h2" inner italic colour="dark">
                H2 heading
              </Heading>
              <Heading type="h3" inner colour="dark">
                H3 heading
              </Heading>
              <BulletSection template>
                ontrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32.
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
                ontrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC.
              </BulletSection>
              <BulletSection template caption>
                This is caption - ontrary to popular belief
              </BulletSection>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section background="White" inner>
        <Container className="t-mt-87">
          <Row>
            <Col lg={12} md={12}>
              <div className="secondImg" />
              <BulletSection template caption className="t-mt-20">
                This is caption - ontrary to popular belief
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
                H1 heading
              </Heading>
              <Heading type="h2" inner italic colour="dark">
                H2 heading
              </Heading>
              <Heading type="h3" inner colour="dark">
                H3 heading
              </Heading>
              <BulletSection template>
                ontrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC.
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
                  <NextPrevBtn>Name of Left Case Study</NextPrevBtn>
                </Col>
                <Col lg={8} md={6} />
                <Col lg={2} md={3}>
                  <NextPrevBtn rightArrow>Name of Right Case Study</NextPrevBtn>
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