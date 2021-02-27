const path = require("path")

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   console.log(JSON.stringify(node, undefined, 4))
// }
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const caseStudy = path.resolve("./src/template/caseStudy/index.js")

  //Blogs from Contentful
  const caseStudySlugs = await graphql(`
    query {
      allContentfulCaseStudy {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  caseStudySlugs.data.allContentfulCaseStudy.edges.forEach(edge => {
    createPage({
      component: caseStudy,
      path: `/caseStudy/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
