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
        <BaseLink link="/uxCaseStudy" internal>
          Button
        </BaseLink>
      </p>
      <Footer />
    </div>
  )
}
export default Home
