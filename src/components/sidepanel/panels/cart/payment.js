import React from "react"
import { useLocation } from "@reach/router"

import Button from "../../../button"
import { setRoutes, navigate, useGetRelativeUrl } from "../../../router"
import { CART, PAY, SHIPPING } from "../../routes"

function Payment(props) {
  const location = useLocation()
  const url = useGetRelativeUrl(CART, PAY)

  return (
    <>
      <div className="sub panel cart">
        <h2
          onClick={() => setRoutes(location, [CART, SHIPPING])}
          className="title"
        >
          <span>Información de pago</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis non odit
          sordidos, vanos, leves, futtiles
        </p>
        <Button className="fluid primary" onClick={() => navigate(url)}>
          Continuar
        </Button>
      </div>
    </>
  )
}

export default Payment
