import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Image from "../image"

const ProductCard = props => {
  const {
    title,
    price,
    unit,
    slug,
    images,
    UpdateInput,
    ToggleButton,
  } = props

  const image = images ? (
    <Img fluid={images[0].childImageSharp.fluid} alt={title} />
  ) : (
    <Image />
  )

  return (
    <div className="shop-item">
      <Link to={`/${slug}/`}>
        {image}
        <h2 className="title row">{title}</h2>
      </Link>
      <div className="subtitle row">
        ${price} {unit}
      </div>
      <UpdateInput {...props} className="updateInput" />
      <ToggleButton {...props} />

      <style jsx global>{`
        .updateInput {
          margin: 0 auto 1rem auto;
        }

        .shop-item {
          padding: 1rem 1rem 2rem;
          background-color: #fff;
          /* box-shadow: 0 1px 2px rgba(0,0,0,.1); */
          box-shadow: 0 1px 2px #e0e0e0;
          text-align: center;
          color: #484c51;
        }

        .shop-item .row {
          margin: 0 auto 0.9rem;
        }

        .shop-item a {
          text-decoration: none;
        }

        .shop-item .wrapper-a {
          display: block;
        }

        .shop-item .title {
          font-weight: bold;
          font-size: 1.1rem;
          color: #333;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .shop-item .subtitle {
          font-size: 1.1rem;
        }

        .shop-item img {
          max-width: 100%;
        }

        .shop-item button {
          margin-bottom: 0.3rem;
          font-style: italic;
          padding: 0.9rem 1.8rem;
        }
      `}</style>
    </div>
  )
}

export default ProductCard
