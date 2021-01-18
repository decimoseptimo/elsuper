import React from "react"
import { Link } from "@reach/router"

import Button from "../../button"
import { useGetRelativeUrl } from "../../router"
import { MY_ACCOUNT, PROFILE, ORDERS, CARDS, ADDRESSES, LOG_OUT } from "../../routes"

const MyAccount = () => {
  const profileUrl = useGetRelativeUrl(MY_ACCOUNT, PROFILE)
  const ordersUrl = useGetRelativeUrl(MY_ACCOUNT, ORDERS)
  const cardsUrl = useGetRelativeUrl(MY_ACCOUNT, CARDS)
  const addressesUrl = useGetRelativeUrl(MY_ACCOUNT, ADDRESSES)
  const logOutUrl = useGetRelativeUrl(MY_ACCOUNT, LOG_OUT)

  return (
    <>
      <div className="panel cart">
        <h2 className="title">
          Mi cuenta <span className="subtitle">Jose Perez</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis non odit
          sordidos, vanos, leves, futtiles
        </p>
        <Link to={profileUrl}>
          <Button className="fluid">Datos personales</Button>
        </Link>
        <Link to={ordersUrl}>
          <Button className="fluid">Pedidos</Button>
        </Link>
        <Link to={cardsUrl}>
          <Button className="fluid">Tarjetas</Button>
        </Link>
        <Link to={addressesUrl}>
          <Button className="fluid">Direcciones</Button>
        </Link>
        <Link to={logOutUrl}>
          <Button className="fluid">Cerrar sesion</Button>
        </Link>
      </div>
    </>
  )
}

export default MyAccount
