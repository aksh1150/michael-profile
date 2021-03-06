import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Col } from "react-bootstrap"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import {
  Heading,
  BulletSection,
  Section,
  BaseLink,
} from "../../Components/atoms"

const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <BulletSection template>{children}</BulletSection>
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return (
        <Heading type="h2" inner colour="dark">
          {children}
        </Heading>
      )
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <Heading type="h2" inner italic colour="dark">
          {children}
        </Heading>
      )
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return (
        <Heading type="h3" inner colour="dark">
          {children}
        </Heading>
      )
    },
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      return (
        <img
          src={node.data.target.fields.file["en-US"].url}
          alt="image"
          width="500px"
          height="400px"
        />
      )
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <BaseLink inner template link={node.data.uri}>
          {children}
        </BaseLink>
      )
    },
  },
}

const NewHTML = ({ active }) => {
  const query = useStaticQuery(graphql`
    query {
      allContentfulCaseStudy(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            test {
              json
            }
          }
        }
      }
    }
  `)

  const edgesNode = query.allContentfulCaseStudy.edges
  // const getNode = () => {
  //   if (query.allContentfulCaseStudy.edges.node) {
  //     return query.allContentfulCaseStudy.edges[active].node.test !== null
  //       ? query.allContentfulCaseStudy.edges[active].node.test.json
  //       : ""
  //   }
  //   return null
  // }
  const actives = active || 0
  const getHTML = edgesNode[actives].node.test
    ? edgesNode[actives].node.test.json
    : ""

  return (
    <Col md={12} className="t-mt-87">
      {documentToReactComponents(getHTML, RICHTEXT_OPTIONS)}
    </Col>
  )
}

export default NewHTML
