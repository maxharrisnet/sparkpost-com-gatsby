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
      allWpSupportArticle {
        nodes {
          date
          title
          slug
          uri
        }
      }
      allWpMomentumArticle {
        nodes {
          date
          title
          slug
          uri
        }
      }
    }
  `).then(result => {
    result.data.allWpPost.nodes.forEach(node => {
      createPage({
        path: `/blog/${node.slug}`,
        component: path.resolve(`./src/templates/blog-single.js`),
        context: {
          slug: node.slug,
        },
      })
    })
    result.data.allWpPressRelease.nodes.forEach(node => {
      createPage({
        path: `/press-releases/${node.slug}`,
        component: path.resolve(`./src/templates/press-single.js`),
        context: {
          slug: node.slug,
        },
      })
    })
    result.data.allWpSupportArticle.nodes.forEach(node => {
      createPage({
        path: node.uri,
        component: path.resolve(`./src/templates/support-single.js`),
        context: {
          uri: node.uri,
        },
      })
    })
    result.data.allWpMomentumArticle.nodes.forEach(node => {
      createPage({
        path: node.uri,
        component: path.resolve(`./src/templates/momentum-single.js`),
        context: {
          uri: node.uri,
        },
      })
    })
  })
}
