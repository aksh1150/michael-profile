import React from "react"
import { Logo, BaseLink } from "../../atoms"

import SocialMedia from "../SocialMedia"
import { Container, Row, Col } from "react-bootstrap"

const Header = () => (
  <Container>
    <Row>
      <Col sm={6}>
        <BaseLink link="/" internal noHoverEffect>
          <Logo />
        </BaseLink>
      </Col>
      <Col sm={6}></Col>
    </Row>
  </Container>
)

export default Header
