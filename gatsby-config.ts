import type { GatsbyConfig } from "gatsby"
import { title } from "process"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `ТЕПЛО НА ПЕРЕДОВУ`,
    siteUrl: `https://www.teplonaperedovu.com.ua`,
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400", "700"],
            },
            {
              family: "Exo 2",
              variants: ["400", "700"],
            },
          ],
        },
      },
    },
  ],
}

export default config
