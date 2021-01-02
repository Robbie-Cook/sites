require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Robbie Cook - Developer`,
    siteUrl: "https://robbie.digital/",
    siteTitle: ``,
    siteHeadline: ``,
    siteDescription: ``,
    siteLanguage: `en`,
    siteImage: ``, // TODO: fill this out
    author: ``,
    basePath: "/",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/cara/sections/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/blog-posts/`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-theme-ui`,
    },
    "gatsby-plugin-next-seo",
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Robbie Cook`,
        short_name: `Robbie Cook`,
        description: `Robbie Cook's portfolio`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          // {
          //   src: `/android-chrome-192x192.png`,
          //   sizes: `192x192`,
          //   type: `image/png`,
          // },
          // {
          //   src: `/android-chrome-512x512.png`,
          //   sizes: `512x512`,
          //   type: `image/png`,
          // },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    "gatsby-plugin-antd",
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};
