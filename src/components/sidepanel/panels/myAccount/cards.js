import React from "react"
import { useLocation } from "@reach/router"

import Button from "../../../button"
import { setRoutes } from "../../../router"
import { MY_ACCOUNT } from "../../routes"

const Cards = (props) => {
  const location = useLocation()

  return (
    <>
      <div className="panel cart">
        <h2 className="title">Tarjetas</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis non odit
          sordidos, vanos, leves, futtiles
        </p>
        <Button
          className="fluid round default3"
          onClick={() => setRoutes(location, [MY_ACCOUNT])}
        >
          Volver
        </Button>
      </div>
    </>
  )
}

export default Cards
