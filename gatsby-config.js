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
        url: `http://sparkpost.test`,
        // url: process.env.WORDPRESS_URL,
        verbose: true,
      },
    },
  ],
}
