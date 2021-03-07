import React from "react"
import { useLocation } from "@reach/router"

import Button from "../../../button"
import { setRoutes /* , navigate, useGetRelativeUrl  */ } from "../../../router"
import { CART, PAYMENT } from "../../routes"

function Pay(props) {
  const location = useLocation()

  return (
    <>
      <div className="sub panel cart">
        <h2
          onClick={() => setRoutes(location, [CART, PAYMENT])}
          className="title"
        >
          <span>Resumen y pagar</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis non odit
          sordidos, vanos, leves, futtiles
        </p>
        <Button className="fluid primary">PAGAR</Button>
      </div>
    </>
  )
}

export default Pay
