/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `https://staging.sparkpost.com/graphql`,
        // url: process.env.WORDPRESS_URL,
        type: {
          Comment: {
            exclude: true,
          }
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
      resolve: `gatsby-plugin-sharp`,
    },
  ],
}
