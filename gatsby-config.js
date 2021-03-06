require('dotenv').config({
  path: '.env',
})

module.exports = {
  siteMetadata: {
    title: `Jordan Christie | Front-End/UI Developer`,
    description: `Hi! I'm a Front-End/UI Developer with a brain full of ideas and a desire to make cool stuff.`,
    author: `Jordan Christie`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jordan Christie`,
        short_name: `Jordan Christie`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: `jordanchristie-blog`,
        defaultLang: `en-us`,
        accessToken: `${process.env.API_KEY}`,
        lang: `en-us`,
        pages: [
          {
            type: `Post`,
            match: `/blog/:uid`,
            path: `/blog`,
            component: require.resolve(`./src/templates/post.js`),
          },
        ],
      },
    },
  ],
}
