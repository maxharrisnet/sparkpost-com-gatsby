/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `https://staging.sparkpost.com/graphql`,
        // url: `https://sparkpost.test/graphql`,
        type: {
          Comment: {
            exclude: true,
          },
          Tag: {
            exclude: true,
          },
          User: {
            exclude: true,

          }
        },
        html: {
          useGatsbyImage: false,
        },
        verbose: true,
        debug: {
          graphql: {
            showQueryVarsOnError: true,
            panicOnError: false,
            onlyReportCriticalErrors: true,
            writeQueriesToDisk: true,
          },
        },
      },
    },
  ],
}
