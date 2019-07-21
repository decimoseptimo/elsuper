import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import css from "styled-jsx/css"

import Image from "../image"

const ProductCard = props => {
  const {
    id,
    title,
    price,
    unit,
    slug,
    images,
    UpdateInput,
    ToggleButton,
  } = props
  const { className, styles } = css.resolve`
    .row {
      margin: 0 auto 1rem auto;
    }

    .wrapper-a {
      display: block;
    }
  `

  const image = images ? (
    <Img fluid={images[0].childImageSharp.fluid} alt={title} />
  ) : (
    <Image />
  )

  return (
    <div className="shop-item">
      <Link className={`${className} wrapper-a`} to={`/${slug}`}>
        {image}
        <h2 className="title row">{title}</h2>
      </Link>
      <div className="subtitle row">
        ${price} {unit}
      </div>
      {UpdateInput(`${className} row`)}
      {ToggleButton}

      {styles}
      <style jsx>{`
        .shop-item {
          padding: 1rem;
          background-color: #fff;
          /* box-shadow: 0 1px 2px rgba(0,0,0,.1); */
          box-shadow: 0 1px 2px #e0e0e0;
          text-align: center;
          color: #484c51;
        }

        .shop-item .row {
          margin: 0 auto 1rem auto;
        }

        .shop-item .wrapper-a {
          display: block;
        }

        .shop-item .title {
          font-weight: bold;
          font-size: 1.1rem;
          color: #222;
        }

        .shop-item .subtitle {
          font-size: 1.1rem;
        }

        .shop-item img {
          max-width: 100%;
        }

        .shop-item .button {
          margin-bottom: 0.3rem;
        }
      `}</style>
    </div>
  )
}

export default ProductCard
