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
        type: {
          Comment: {
            exclude: false,
          },
          Tag: {
            exclude: true,
          },
          User: {
            exclude: true,
          },
          UserRole: {
            exclude: true,
          },
        },
        html: {
          useGatsbyImage: false,
        },
        type: {
          Post: {
            limit: 50
          },
          SupportArticle: {
            limit: 50
          },
          MomentumArticle: {
            limit: 50
          },
          NewsArticle: {
            limit: 50
          },
          Tag: {
            limit: 50
          },
        },
        verbose: true,
        debug: {
          graphql: {
            showQueryVarsOnError: true,
            panicOnError: false,
            onlyReportCriticalErrors: false,
            writeQueriesToDisk: true,
          },
        },
      },
    },
  ],
}
