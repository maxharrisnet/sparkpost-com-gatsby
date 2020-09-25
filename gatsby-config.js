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
        baseUrl: `sparkpost.test`,
        protocol: `http`,
        hostingWPCOM: false,
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
