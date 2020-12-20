import React from "react"
import { Link } from "gatsby"
import { Footer, Buttons } from "../Components/molecules"

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <p>
        <Link to="/uxCaseStudy">UX Case Studies</Link>
        <Buttons>Button</Buttons>
      </p>
      <Footer />
    </div>
  )
}
export default Home
