const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "academy",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: path.resolve(__dirname, 'src/pages'),
        ignore: ['**/sections/*', '**/options/*', '**/elements/*'],
      },
    },
    {
      resolve: 'gatsby-plugin-resolve-src',
      options: {
        srcPath: path.resolve(__dirname, 'src'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(__dirname, `src/assets/images`),
      },
    },
  ],
};
