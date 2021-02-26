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
} from "../../routes"

const MyAccount = (props) => {
  const profileUrl = useGetRelativeUrl(MY_ACCOUNT, PROFILE)
  const ordersUrl = useGetRelativeUrl(MY_ACCOUNT, ORDERS)
  const cardsUrl = useGetRelativeUrl(MY_ACCOUNT, CARDS)
  const addressesUrl = useGetRelativeUrl(MY_ACCOUNT, ADDRESSES)
  const logOutUrl = useGetRelativeUrl(MY_ACCOUNT, LOG_OUT)

  return (
    <>
      <div className={`jsx-8256865853 panel cart`}>
        <header>
          <h2 className="title">Mi cuenta</h2>
          <span className="subtitle">
            Juan Hernández (<a href="#">salir</a>)
          </span>
        </header>
        <Button
          className="fluid round default3"
          onClick={() => navigate(profileUrl)}
        >
          Datos personales
        </Button>
        <Button
          className="fluid round default3"
          onClick={() => navigate(ordersUrl)}
        >
          Pedidos
        </Button>
        <Button
          className="fluid round default3"
          onClick={() => navigate(cardsUrl)}
        >
          Tarjetas
        </Button>
        <Button
          className="fluid round default3"
          onClick={() => navigate(addressesUrl)}
        >
          Direcciones
        </Button>
      </div>
      <style jsx global>{`
        .jsx-8256865853 button {
          margin-bottom: 0.4rem;
        }

        .panel header {
          display: flex;
          align-items: baseline;
        }

        .panel .subtitle {
          margin-left: auto;
        }
      `}</style>
    </>
  )
}

export default MyAccount
