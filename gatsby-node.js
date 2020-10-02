const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWpPage {
        edges {
          node {
            content
            id
            slug
            status
            title
          }
        }
      }
      allWpPost {
        nodes {
          id
          slug
          status
        }
      }
    }
  `)

  //  Check for errors
  if (result.errors) {
    console.error(result.errors)
  }

  // Query results destructured
  // const { allWpPage, allWpPost } = result.data

  // Define the Page template
  const Pages = results.data.allWpPage.edges
  const pageTemplate = path.resolve(`./src/templates/pages/page-default.js`)

  Pages.forEach(page => {
    createPage({
      path: `/${page.node.slug}`,
      component: pageTemplate,
      context: {
        id: page.node.id,
      },
    })
  })

  // Define the Post template
  const BlogPosts = result.data.allWpPost.edges
  const postTemplate = path.resolve(`./src/templates/blog-post.js`)

    BlogPosts.forEach(post => {
    createPage({
      path: `/blog/${post.node.slug}`,
      component: postTemplate,
      context: {
        id: post.node.id,
      },
    })
  })
}