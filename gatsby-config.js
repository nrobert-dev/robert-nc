module.exports = {
  siteMetadata: {
    title: `Software Developer`,
    description: `I'm Robert, a Software Developer from Romania. I specialize in building beautiful, dynamic and rich Web Experiences. I also have a blog where I share my experiences in tech, dev and more!`,
    author: `@nrobertdev`,
    siteUrl: `https://robertnc.com/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-nc.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyCgzihCXh5gpuFJRfwUoPtssZFogYb7rBM",
          authDomain: "testfirestore-25bc6.firebaseapp.com",
          databaseURL: "https://testfirestore-25bc6.firebaseio.com",
          projectId: "testfirestore-25bc6",
          storageBucket: "testfirestore-25bc6.appspot.com",
          messagingSenderId: "13576346726",
          appId: "1:13576346726:web:df3cda051d1c5835"
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
