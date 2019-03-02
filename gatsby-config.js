module.exports = {
  siteMetadata: {
    title: 'Minority Veterans of America',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Minority Vets',
        short_name: 'mva',
        start_url: '/',
        background_color: '#04476d',
        theme_color: '#04476d',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
