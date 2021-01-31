import React from "react"

import Button from "../../../button"
import { navigate, useGetRelativeUrl } from "../../../router"
import {
  MY_ACCOUNT,
  PROFILE,
  ORDERS,
  CARDS,
  ADDRESSES,
  LOG_OUT,
} from "../../../routes"

const MyAccount = (props) => {
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
        <Button className="fluid" onClick={()=>navigate(profileUrl)}>Datos personales</Button>
        <Button className="fluid" onClick={()=>navigate(ordersUrl)}>Pedidos</Button>
        <Button className="fluid" onClick={()=>navigate(cardsUrl)}>Tarjetas</Button>
        <Button className="fluid" onClick={()=>navigate(addressesUrl)}>Direcciones</Button>
        <Button className="fluid" onClick={()=>navigate(logOutUrl)}>Cerrar sesion</Button>
      </div>
    </>
  )
}

export default MyAccount
