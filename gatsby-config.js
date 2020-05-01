module.exports = {
  siteMetadata: {
    title: `ELSUPER`,
    description: `Grandes productos a precios bajos. Con ELSUPER ahorras más.`,
    author: `azulacero.mx`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ELSUPER`,
        short_name: `ELSUPER`,
        start_url: `/`,
        background_color: `#2a2a2a`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-jsx`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: "products",

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: "flexsearch",

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          {
            allProductsJson {
              edges {
                node {
                  id
                  title
                  price
                  unit
                  min_quantity
                  max_quantity
                  slug
                  description
                  images {
                    childImageSharp {
                      fluid(maxWidth: 1080) {
                        base64
                        aspectRatio
                        src
                        srcSet
                        sizes
                      }
                    }
                  }
                }
              }
            }
          }
        `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: "id",

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ['title'],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: [
          "id",
          "title",
          "price",
          "unit",
          "min_quantity",
          "max_quantity",
          "slug",
          "description",
          "images",
        ],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. This is required.
        normalizer: ({ data }) =>
          data.allProductsJson.edges.map(({ node }) => ({
            id: node.id,
            title: node.title,
            price: node.price,
            unit: node.unit,
            min_quantity: node.min_quantity,
            max_quantity: node.max_quantity,
            slug: node.slug,
            description: node.description,
            images: node.images,
          })),
      },
    },
  ],
}
