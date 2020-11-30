module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-stylus",
    "gatsby-plugin-layout",
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        duration: 500,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PSS Bikes`,
        short_name: `PSS Bikes`,
        start_url: `/`,
        background_color: `#F2F2F2`,
        theme_color: `#636A73`,
        display: `standalone`,
        icon: "./src/assets/icon.png",
      },
    },
  ],
}
