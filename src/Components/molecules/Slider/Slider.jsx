import React from "react"
import { Carousel } from "react-bootstrap"
import "./Slider.scss"

const Slider = ({ slideData }) => {
  return (
    <Carousel>
      {slideData.map(slider => (
        <Carousel.Item interval={1000} key={slider.name}>
          <Carousel.Caption>
            <h3>{slider.name}</h3>
            <p>{slider.testimonials}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Slider
