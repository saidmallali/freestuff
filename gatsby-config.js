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
    title:"only free stuff",
    description:"get free stuff and free simple and win free stuff",
    author:'said labriki',
    titleTemplate: "%s  | only free stuff",
    siteUrl:'https://winagiftcard.site',
    // siteUrl:'https://onlyfreestuff.netlify.app',
    image:'/metaimage.png',
    twitterUsername:'@styleshopstore1',
    siteLanguage:'en'
  },
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`,
          'gatsby-plugin-styled-components',
          `gatsby-transformer-sharp`,
          `gatsby-plugin-sharp`,
          `gatsby-plugin-transition-link`,
          `gatsby-plugin-playground`,
          `gatsby-plugin-react-helmet`,
          `gatsby-plugin-sitemap`,
          {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
              host: 'https://winagiftcard.site',
              sitemap: 'https://winagiftcard.site/sitemap.xml',
              policy: [{ userAgent: '*', allow: '/' }]
            }
          },
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
