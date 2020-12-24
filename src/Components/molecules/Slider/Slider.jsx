import React from "react"
import { Carousel } from "react-bootstrap"
import { Heading, Paragraph } from "../../atoms"
import "./Slider.scss"

const Slider = ({ slideData }) => {
  return (
    <Carousel>
      {slideData.map(slider => (
        <Carousel.Item interval={1000} key={slider.name}>
          <Carousel.Caption>
            <Heading type="h3" colour="white">
              {slider.name}
            </Heading>
            <Paragraph size="xs" fontcolour="white">
              {slider.testimonials}
            </Paragraph>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Slider
