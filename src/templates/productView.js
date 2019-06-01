import React from "react"
import { image } from "gatsby"

import ProductGallery from "../components/productGallery"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import nut from "../images/a36710ddb962166d6f11bafda448f1f1.jpg"
import ing from "../images/Etiqueta-RC-Maxi-Adult.jpg"

const ProductView = props => {
  const { title, price, unit, image } = props.pageContext
  const images = ["items/" + image, nut, ing]

  return (
    <Layout>
      <SEO title={title} keywords={[`gatsby`, `application`, `react`]} />

      <div className="row">
        <div className="col col-a">
          <ProductGallery images={images} />
        </div>
        <div className="col col-b">
          <h1>{title}</h1>
          <p>
            {price} {unit}
          </p>
          <Button onClick={() => {}}>Agregar</Button>
        </div>
        <div className="col col-c">
          <div className="cart">
            <h2>Carrito</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque
              distinctio doloremque dolorum eligendi error id incidunt,
              inventore maiores nostrum nulla quia tempora tempore tenetur ut.
              Et nobis officia velit?
            </p>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .row {
            display: flex;
            flex-flow: row wrap;
            // border: 2px solid red;
          }

          .col {
            // float: left;
            // display: inline-block;
            // width: 33.33%;
            flex: 1;
            // border: 2px solid orange;
          }

          .col-a {
            width: 100%;
            //             max-width: 600px;
          }

          .col-b {
            // flex: 1;
            padding: 0 2rem;
          }

          .cart {
            background-color: #eee;
            padding: 1rem 2rem 2rem;
            min-width: 300px;
          }
        `}
      </style>
    </Layout>
  )
}

export default ProductView
