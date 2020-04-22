/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata:{
    title:"free good stuff",
    description:"get free stuff and free simple and win free stuff",
    author:'said labriki',
    siteUrl:'https://winagiftcard.site/'
  },
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`,
          'gatsby-plugin-styled-components',
          `gatsby-transformer-sharp`,
          `gatsby-plugin-sharp`,
          `gatsby-plugin-transition-link`,
          `gatsby-plugin-playground`,
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `${__dirname}/src/images/`,
            },
          },
          {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: process.env.CONTENTFUL_SPACE_ID,
              // Learn about environment variables: https://gatsby.dev/env-vars
              accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
          }
        ]
}
