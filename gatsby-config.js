module.exports = {
  siteMetadata: {
    title: `ELSUPER`,
    description: `Grandes productos a precios bajos. Con ELSUPER ahorras más.`,
    author: `azulacero.mx`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ELSUPER`,
        short_name: `ELSUPER`,
        start_url: `/`,
        background_color: `#2a2a2a`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-jsx`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
