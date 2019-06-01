import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import css from "styled-jsx/css"
import slugify from "slugify"
import Image from "../components/image"
import InputNumber from "../components/inputNumber"
import Button from "./button"

const ShopItem = props => {
  // const [spinner, setSpinner] = useState(2.1)
  const { className, styles } = css.resolve`
        .row {
          margin: 0 auto 1rem auto;
        }

        .wrapper-a {
          display: block;
        }
  `

  const title = props.title || "Producto no encontrado"
  const price = props.price || "0"
  const unit = props.unit || "pz"
  const image = props.image ? (
    <Img fluid={props.image.childImageSharp.fluid} alt={title} />
  ) : (
    <Image />
  )

  // console.log(props)
  return (
    <div className="shop-item">
      <Link className={`${className} wrapper-a`} to={"/"+slugify(title)}>
        {image}
        <h2 className="title row">{title}</h2>
      </Link>
      <div className="subtitle row">
        ${price} {unit}
      </div>

      <InputNumber
        className={`${className} row`}
        required={true}
        defaultValue={1}
        min={1}
        max={100}
        precision={unit == "kg" ? 2 : 0}
      />
      <Button className={`${className} row`}>Agregar</Button>

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
          // outline: 1px solid red;
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

ShopItem.defaultProps = {
  title: "Producto no encontrado",
  price: "0",
  unit: "pz",
  image: null,
}

export default ShopItem
