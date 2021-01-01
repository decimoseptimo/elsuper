import React from "react"
import { Link } from "@reach/router"

import Button from "../../../button"
import { useGetRelativeUrl } from "../../../router"
import { CART, PAY } from "../../../routes"

function Payment(props) {
  const url = useGetRelativeUrl(CART, PAY)

  return (
    <>
      <div className="panel cart">
        <h2 className="title">Información de pago</h2>
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

export default Payment
