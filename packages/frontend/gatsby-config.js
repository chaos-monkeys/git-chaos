module.exports = {
  siteMetadata: {
    title: 'Chaos Monkeys',
    description: 'Helping you build better',
    author: 'Chaos Monkeys',
    background: 'Make chaos',
    sidebar: [
      {
        name: 'Meet the team',
        url: '/meet-the-team',
      },
      {
        name: 'Posts',
        url: '/posts',
      },
      {
        name: 'Git Chaos',
        url: '/git-chaos',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-scss-typescript',
    'gatsby-plugin-preact',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
