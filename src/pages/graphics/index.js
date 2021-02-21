import React, { useState } from "react"
import {
  LinkButton,
  Header,
  ImageEnlarge,
  ShareButton,
  NextPrevBtn,
} from "../../Components/molecules"
import {
  BaseLink,
  Heading,
  HighlightedQuotes,
  BulletSection,
  Quote,
  Section,
} from "../../Components/atoms"
import { Layout } from "../../Components/organisms"

import SocialMediaData from "../../data/SocialMedia"
import { Container, Row, Col } from "react-bootstrap"
import "./index.scss"

const Graphics = () => {
  return (
    <Layout
      pagename="Home - Michelle Profile"
      className="overflowHidden template globalStyle"
    >
      <Section background="White" inner heroSection>
        <Header />
        <div className="HeroImage placeHolder">
          <Heading type="h2">Hero Image</Heading>
        </div>
      </Section>
      <Section background="White" inner>
        <Container>
          <Row>
            <Col lg={3} md={10}>
              <Heading type="h1" inner>
                H1 head
              </Heading>
              <BulletSection template className="mt-3">
                ontrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.
              </BulletSection>
            </Col>
            <Col lg={9} md={12} className="pl-6 mt-2">
              <Heading type="h2" inner italic>
                H2 heading
              </Heading>
              <BulletSection template className="mt-3">
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
              <BulletSection template className="mt-3">
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
        <Container>
          <Row>
            <Col lg={6} md={12} className="pr-4">
              <Heading type="h1" inner>
                H1 heading
              </Heading>
              <Heading type="h2" inner italic>
                H2 heading
              </Heading>
              <Heading type="h3" inner>
                H3 heading
              </Heading>
              <BulletSection template className="mt-3">
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
            <Col lg={6} md={12}>
              <Heading type="h1" inner>
                H1 heading
              </Heading>
              <Heading type="h2" inner italic>
                H2 heading
              </Heading>
              <Heading type="h3" inner>
                H3 heading
              </Heading>
              <BulletSection template className="mt-3">
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

      <Section background="white" inner>
        <Container>
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
        <Container>
          <Row>
            <Col lg={12} md={12}>
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
        <Container>
          <Row>
            <Col lg={9} md={12}>
              <Heading type="h1" inner>
                H1 heading
              </Heading>
              <Heading type="h2" inner italic>
                H2 heading
              </Heading>
              <Heading type="h3" inner>
                H3 heading
              </Heading>
              <BulletSection template className="mt-3">
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
        <Container>
          <Row>
            <Col lg={5} md={12}>
              <BulletSection template className="mt-3">
                Thank you for reading, contact me if you want to learn more
                about this case study.
              </BulletSection>
            </Col>
            <Col lg={3} md={12} />
            <Col lg={4} md={12}>
              <ShareButton iconData={SocialMediaData} />
            </Col>

            <Col sm={12} className="border-top pt-5 mt-5">
              <Row>
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
