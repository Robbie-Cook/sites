require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Robbie Cook - Developer`,
    siteUrl: "https://robbie.pw/",
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
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `@robbie-cook/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
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
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};
