const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWpPost(sort: { fields: [date] }) {
        nodes {
          date
          title
          excerpt
          slug
        }
      }
      allWpPressRelease(sort: { fields: [date] }) {
        nodes {
          date
          title
          slug
        }
      }
    }
  `).then(result => {
    result.data.allWpPost.nodes.forEach((node) => {
      createPage({
        path: `/blog/${node.slug}`,
        component: path.resolve(`./src/templates/blog-single.js`),
        context: {
          slug: node.slug,
        }
      })
    })
    result.data.allWpPressRelease.nodes.forEach((node) => {
      createPage({
        path: `/press-releases/${node.slug}`,
        component: path.resolve(`./src/templates/press-single.js`),
        context: {
          slug: node.slug,
        }
      })
    })
  })
}
