module.exports = {
  siteMetadata: {
    title: `enfermeria.io`,
    description: `Recibe el mejor cuidado, en la comodidad de tu hogar`,
    author: `enfermeria.io`,
    siteUrl: `https://enfermeria.io`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `tracedSVG`,
          quality: 100,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `enfermeria.io`,
        short_name: `enfermeria.io`,
        start_url: `/`,
        background_color: `#060f74`,
        theme_color: `#060f74`,
        display: `minimal-ui`,
        icon: `src/images/lantern-1.svg`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
