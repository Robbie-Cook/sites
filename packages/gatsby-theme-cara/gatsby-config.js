module.exports = ({ basePath = `/` }) => ({
  siteMetadata: {
    siteTitle: ``,
    siteTitleAlt: ``,
    siteHeadline: ``,
    siteUrl: ``,
    siteDescription: ``,
    siteLanguage: `en`,
    // siteImage: `/banner.jpg`,
    author: ``,
    basePath,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
  ],
})
