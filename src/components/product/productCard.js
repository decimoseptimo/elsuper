import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Image from "../image"

const ProductCard = props => {
  const {
    data,
    count,
    setCount,
    dispatch,
    countInCart,
    UpdateInput,
    ToggleButton,
  } = props

  const image = data.images ? (
    <Img fluid={data.images[0].childImageSharp.fluid} alt={data.title} />
  ) : (
    <Image />
  )

  return (
    <div className={`productCard ${countInCart?'active':''}`}>
      <Link to={`/${data.slug}/`}>
        {image}
      </Link>
      <div className="subtitle row">
        <span className="price"><span className="symbol">$</span>{data.price}</span> <span className="unit">{data.unit}</span>
      </div>
      <h2 className="title row">{data.title}</h2>
      {/*<input type="number" placeholder="1.00" step="1.00" min="1" max="100" />*/}

      <UpdateInput className="style2" data={data} count={count} setCount={setCount} dispatch={dispatch} countInCart={countInCart} />
      <ToggleButton addClassName="style2 round" removeClassName="style2 round" data={data} count={count} dispatch={dispatch} countInCart={countInCart} />

      <style jsx global>{`
        .productCard {
          padding: 1rem 1rem 1rem;
          background-color: #fff;
          /* box-shadow: 0 1px 2px rgba(0,0,0,.1); */
          box-shadow: 0 1px 2px #e0e0e0;
          text-align: center;
          color: #484c51;
        }

        .productCard .row {
          margin: 0 auto 0.9rem;
        }

        .productCard a {
          text-decoration: none;
        }

        .productCard .wrapper-a {
          display: block;
        }

        .productCard .title {
          font-size: 1.1rem;
          color: #333;
          font-size: 1.1rem;
          font-weight: 500;
          margin-bottom: 2rem;
        }

        .productCard .subtitle {
          font-size: 1.1rem;
        }
        
        .productCard .price {
          font-weight: 600;
          font-size: 1.2rem;
        }
        
        .productCard .symbol {
          font-size: 1.2rem;
          margin-left: .3rem;
        }

        .productCard .unit {
          // font-weight: 600;
        }

        .productCard img {
          max-width: 100%;
        }

        .productCard.active .toggleButton {
          display: none;
        }        
        
        .productCard .inputNumber {
          display: none;
        }
        .productCard.active .inputNumber {
          display: block;
        }
      `}</style>
    </div>
  )
}

export default ProductCard
