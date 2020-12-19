import React from "react"
import { Link } from "gatsby"

import { Footer } from "../Components/organisms"

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <p>
        <Link to="/uxCaseStudy">UX Case Studies</Link>
      </p>
      <Footer />
    </div>
  )
}
export default Home
