import React from "react"

import Button from "../../../button"
import { CART, PAYMENT } from "../../../routes"
import { navigate, useGetRelativeUrl } from "../../../router"

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
        <Button className="fluid primary" onClick={()=>navigate(url)}>Continuar</Button>
      </div>
    </>
  )
}

export default Shipping
