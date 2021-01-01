import React from "react"
import { Link } from "@reach/router"

import Button from "../../../button"
import { CART, PAYMENT } from "../../../routes"
import { useGetRelativeUrl } from "../../../router"

function Shipping(props) {
  const url = useGetRelativeUrl(CART, PAYMENT)

  return (
    <>
      <div className="panel cart">
        <h2 className="title">Información de envio</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis non odit
          sordidos, vanos, leves, futtiles
        </p>

        <Link to={url}>
          <Button className="fluid primary">Continuar</Button>
        </Link>
      </div>
    </>
  )
}

export default Shipping
