module.exports = {
  siteMetadata: {
    title: `Colin's Readings`,
    description: `You are what you read.`,
    author: `@colin`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-pocket`,
      options: {
        consumerKey: "95177-074c39d4a862a11576243b03",
        accessToken: "b361a13e-e0d4-b49f-5fb5-31a0e2",
        weeksOfHistory: 52,
        apiMaxRecordsToReturn: 3000,
        getCurrentWeekOnly: `n`,
        // stateFilterString: "archive",
        tagFilter: false,
        // tagFilterString: "_untagged_",
        favouriteFilter: false,
        // favouriteFilterValue: 0,
        // searchFilter: false,
        // searchFilterString: "These 21 things",
        // domainFilter: false,
        // domainFilterString: "buzzfeed.com"
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
