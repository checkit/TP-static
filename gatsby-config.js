module.exports = {
  siteMetadata: {
    title: `Toddlerpillars PFP project`,
    description: `Toddlerpillars are a collection of 9,999 NFTs with over 888 unique and mind-bending traits.This enormous variety ensures that even the most \"common\" ones will be far from that! Every Toddlerpillar will look dramatically different to its siblings. So much so, that those special creatures, with a combination of the rarest traits, including a handful of 1/1 traits, will be highly coveted by collectors!`,
    sub_title: `The Toddlerpillars are launching in November.`,
    sub_description: `The first 1,000 Toddlerpillars discord members who reach \"Egg Dwellar\" rank will be whitelisted for our PRE-SALE!`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
