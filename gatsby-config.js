/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `readings`,
        path: `${__dirname}/src/readings/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `writings`,
        path: `${__dirname}/src/writings/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `speakings`,
        path: `${__dirname}/src/speakings/`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jean-Louis Mbaka`,
        short_name: `Mbaka`,
        start_url: `/`,
        background_color: `#ffff`,
        theme_color: `#0000`,
        display: `standalone`,
        icon: `src/images/favicons/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Rubik:300,400,500,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
  siteMetadata: {
    title: "jlmbaka",
    description: "Jean-Louis Mbaka's personal website",
    copyright: "Copyright 2021 Jean-Louis Mbaka",
    contact: "me@jlmbaka.com",
  },
}
