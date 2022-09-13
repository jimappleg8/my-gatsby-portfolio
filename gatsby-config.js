module.exports = {
  siteMetadata: {
    title: `Jim's Portfolio`,
    description: `A portfolio website for Jim Applegate`,
    twitterUsername: `@jimappleg8`,
    image: `/ja-logo-icon.png`,
    siteUrl: `https://www.jimappleg8.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/ja-logo-icon.svg`,
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `portfolio`,
        path: `${__dirname}/portfolio`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`,
    `remark`,
    `remark-html`,
    `gatsby-plugin-netlify`,
  ],
};
