import React from "react"
import { Link } from "gatsby"
import { Footer, Button } from "../Components/molecules"
import { BaseLink } from "../Components/atoms"

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <p>
        <Link to="/uxCaseStudy">UX Case Studies</Link>
        <Button link="/uxCaseStudy" internal size="lg">
          Large button
        </Button>
        <br />
        <Button link="/uxCaseStudy" internal>
          Small button
        </Button>
      </p>
      <Footer />
    </div>
  )
}
export default Home
