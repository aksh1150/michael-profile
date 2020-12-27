import React from "react"
import { Carousel } from "react-bootstrap"
import { Heading, Paragraph } from "../../atoms"
import "./Slider.scss"

const Slider = ({ slideData }) => {
  return (
    <Carousel>
      {slideData.map(slider => (
        <Carousel.Item interval={1000} key={slider.id}>
          <Carousel.Caption>
            <Heading type="h3" colour="white">
              {slider.title}
            </Heading>
            <Paragraph size="xs" fontcolour="white">
              {slider.testimonial}
            </Paragraph>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Slider
