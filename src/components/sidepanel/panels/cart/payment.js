import React from "react"

import Button from "../../../button"
import { navigate, useGetRelativeUrl } from "../../../router"
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
        <Button className="fluid primary" onClick={()=>navigate(url)}>Continuar</Button>
      </div>
    </>
  )
}

export default Payment
