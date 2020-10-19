
module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-stylus`, 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PSS Bikes`,
        short_name: `PSS Bikes`,
        start_url: `/`,
        background_color: `#F2F2F2`,
        theme_color: `#636A73`,
        display: `standalone`,
        icon: './src/assets/icon.png'
      }
    },
  ]
}
