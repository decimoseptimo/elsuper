import React from "react"
import { Link } from "gatsby"

import Button from "../../../button"
import { useGetRelativeUrl } from "../../../router"
import { MY_ACCOUNT } from "../../../routes"

const Orders = (props) => {
  const url = useGetRelativeUrl(MY_ACCOUNT)

  return (
    <>
      <div className="panel cart">
        <h2 className="title">Pedidos</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis non odit
          sordidos, vanos, leves, futtiles
        </p>
        <Link to={url}>
          <Button className="fluid">Volver</Button>
        </Link>
      </div>
    </>
  )
}

export default Orders
