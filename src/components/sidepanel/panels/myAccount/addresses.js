import React from "react"
import { useLocation } from "@reach/router"

import { setRoutes } from "../../../router"
import { MY_ACCOUNT } from "../../routes"

const Addresses = (props) => {
  const location = useLocation()

  return (
    <>
      <div className="sub panel myAccount">
        <h2 onClick={() => setRoutes(location, [MY_ACCOUNT])} className="title">
          <span>Direcciones</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis non odit
          sordidos, vanos, leves, futtiles
        </p>
      </div>
    </>
  )
}

export default Addresses
