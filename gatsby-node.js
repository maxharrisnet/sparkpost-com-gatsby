const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            content
            id
            path
            slug
            status
            template
            title
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            path
            slug
            status
            template
            format
          }
        }
      }
      allWordpressWpPress {
        edges {
          node {
            id
            path
            slug
          }
        }
      }
      allWordpressWpSupportArticle {
        edges {
          node {
            id
            path
            slug
          }
        }
      }
      allWordpressWpMomentumArticle {
        edges {
          node {
            id
            path
            slug
          }
        }
      }
    }
  `)

  //  Check for errors
  if (result.errors) {
    console.error(result.errors)
  }

  // Query results destructured
  const { allWordpressPage, allWordpressPost, allWordpressWpPress, allWordpressWpSupportArticle, allWordpressWpMomentumArticle } = result.data

  // Define the Page template
  const pageTemplate = path.resolve(`./src/templates/pages/page-default.js`)

  allWordpressPage.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  // Define the Post template
  const postTemplate = path.resolve(`./src/templates/posts/post-default.js`)

    allWordpressPost.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  // Define the Press template
  const pressTemplate = path.resolve(`./src/templates/press/press-default.js`)

    allWordpressWpPress.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(pressTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  // Define the Support Article template
  const supportArticleTemplate = path.resolve(`./src/templates/support-docs/support-article-default.js`)

    allWordpressWpSupportArticle.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(supportArticleTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  // Define the Momentum Artcile template
  const momentumArticleTemplate = path.resolve(`./src/templates/momentum-docs/momentum-article-default.js`)

    allWordpressWpMomentumArticle.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(momentumArticleTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}