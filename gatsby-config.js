/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // baseUrl: `sparkpost.test`,
        baseUrl: process.env.WORDPRESS_URL,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/taxonomies",
          "**/users",
        ],
      },
    },
  ],
}
