import React from "react"
import { LinkButton } from "../../Components/molecules"
import { BaseLink, Heading, HighlightedQuotes } from "../../Components/atoms"

const CaseStudies = () => {
  return (
    <div>
      <LinkButton>Text</LinkButton>
      <BaseLink InnerLink>Hyperlink</BaseLink>
      <Heading type="h1" inner colour="spaceship">
        Section
      </Heading>
      <Heading type="h2" inner colour="primary">
        H2
      </Heading>
      <Heading type="h3" inner colour="dark">
        H3 content
      </Heading>
      <HighlightedQuotes>Hightlighted Quotes</HighlightedQuotes>
    </div>
  )
}

export default CaseStudies
