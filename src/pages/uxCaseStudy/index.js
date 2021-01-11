import React from "react"
import { LinkButton } from "../../Components/molecules"
import {
  BaseLink,
  Heading,
  HighlightedQuotes,
  BulletSection,
} from "../../Components/atoms"

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
      <BulletSection large bold>
        Goal
      </BulletSection>
      <BulletSection bold>Section Header</BulletSection>
      <BulletSection>Paragraph</BulletSection>
      <BulletSection large>Paragraph 2</BulletSection>
    </div>
  )
}

export default CaseStudies
