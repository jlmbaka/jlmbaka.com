/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const isProduction = process.env.NODE_ENV === "production"

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
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
      resolve: `gatsby-plugin-google-fonts-with-attributes`,
      options: {
        fonts: [`Rubik\:300,400,500,700`],
        display: "swap",
        attributes: {
          rel: "stylesheet preload prefetch",
        },
      },
    },
    {
      resolve: `gatsby-plugin-goatcounter`,
      options: {
        // Either `code` or `selfHostUrl` is required.
        // REQUIRED IF USING HOSTED GOATCOUNTER! https://[my_code].goatcounter.com
        code: isProduction
          ? "jlmbaka.goatcounter.com"
          : "https://jlmbaka-dev.goatcounter.com/",
        pixel: true,
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://www.goodreads.com/review/list_rss/17801759?key=9ukXKmX7HQ8pOObv4FV1jhp3JhfosvD96fsG8G9bOj37KiRf&shelf=read`,
        name: `GoodreadsBook`,
        parserOption: {
          customFields: {
            item: [
              ["author_name", "author"],
              ["book_large_image_url", "coverImageUrl"],
              ["user_read_at", "finished"],
              ["user_date_added", "added"],
              ["user_date_created", "created"],
            ],
          },
        },
      },
    },
    isProduction && {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`,
        ignore: ["readings.js"],
      },
    },
    `gatsby-plugin-netlify`,
  ],
  siteMetadata: {
    title: "jlmbaka",
    description: "Jean-Louis Mbaka's personal website",
    twitterUsername: "@jlmbaka",
    image: "/banner2_bw.webp",
    copyright: "© 2022 Jean-Louis Mbaka",
    location: "Kinshasa, DRC",
    contact: "me@jlmbaka.com",
    siteUrl: "https://jlmbaka.com",
  },
}
