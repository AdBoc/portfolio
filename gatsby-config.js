module.exports = {
  pathPrefix: "/portfolio",
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["400"],
              subsets: ["latin-ext"],
              fontDisplay: "swap"
            }
          ]
        },
        formats: ["woff2", "woff"],
        useMinify: true,
        usePreload: true,
        usePreconnect: false
      }
    }
  ]
}