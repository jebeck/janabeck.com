// eslint-disable-next-line no-undef
module.exports = {
  siteMetadata: {
    title: "jana e. beck",
    description: "personal website of jana e. beck",
    author: "jana e. beck",
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-less`,
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        omitGoogleFont: true,
        pathToConfigModule: "src/utils/typography",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        // eslint-disable-next-line no-undef
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-26285341-7",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "jana e. beck",
        short_name: "jebeck",
        start_url: `/`,
        background_color: `#461A20`,
        theme_color: `#FF5D73`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
