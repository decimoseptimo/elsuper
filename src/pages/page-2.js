import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Slider from "react-slick"
import ProductGallery from "../components/product/productGallery"
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"

const SecondPage = props => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // rtl: true,
    // initialSlide: activeThumb,
    arrows: false,
    // lazyLoad: 'progressive',
    adaptiveHeight: true,
    // responsive: [
    //   {
    //     breakpoint: 300,
    //     settings: {
    //       arrows: true,
    //     },
    //   },
    // ],
    // beforeChange: (oldIndex, index) => {
    //   setActiveThumb(index)
    // },
  }

  const products = props.data.allProductsJson.edges
  const images = products[0].node.images
  console.log(images)

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>

      <div className="parent">
        <div className="child one">
          <ProductGallery images={images} />
        </div>
        <div className="child two">Lorem ipsum dolor sit amet</div>
        <div className="child three">Lorem ipsum dolor sit amet</div>
      </div>

      <Link to="/">Go back to the homepage</Link>
      <style jsx>{`
        .parent {
          border: 1px solid black;
        }

        .item {
          // width: 100%;
          border: 1px solid yellow;
        }

        .child {
          border: 1px solid red;
        }

        .child.one {
          margin-bottom: 1rem;
          overflow: hidden;
        }

        .child.two {
          margin-bottom: 1rem;
        }

        @media screen and (min-width: 500px) {
          .parent {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            grid-column-gap: 1rem;
            grid-row-gap: 1rem;
          }

          .child.three {
            grid-column: 1 / span 2;
          }

          .child.one,
          .child.two {
            margin-bottom 0;
          }
        }

        @media screen and (min-width: 750px) {
          .parent {
            grid-template-columns: 2fr 1fr 1fr;
          }

          .child.three {
            grid-column: auto;
          }

        }
      `}</style>
    </Layout>
  )
}

export default SecondPage


export const pageQuery = graphql`
  query {
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
          images {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
