import React from "react"

import { logout, getCurrentUser } from "../../../../utils/auth"
import Button from "../../../button"
import ButtonAsLink from "../../../buttonAsLink"
import { navigate, useGetRelativeUrl } from "../../../router"
import {
  MY_ACCOUNT,
  PROFILE,
  ORDERS,
  CARDS,
  ADDRESSES,
  LOGIN,
} from "../../routes"

const MyAccount = (props) => {
  const profileUrl = useGetRelativeUrl(MY_ACCOUNT, PROFILE)
  const ordersUrl = useGetRelativeUrl(MY_ACCOUNT, ORDERS)
  const cardsUrl = useGetRelativeUrl(MY_ACCOUNT, CARDS)
  const addressesUrl = useGetRelativeUrl(MY_ACCOUNT, ADDRESSES)
  const loginUrl = useGetRelativeUrl(MY_ACCOUNT, LOGIN)
  const handleLogout = () => {
    navigate(loginUrl, { replace: true })
  }

  return (
    <>
      <div className={`jsx-8256865853 panel myAccount`}>
        <header>
          <h2 className="title">Mi cuenta</h2>
          <span className="subtitle">
            ¡Hola {getCurrentUser().name}! (
            <ButtonAsLink onClick={() => logout(handleLogout)}>
              salir
            </ButtonAsLink>
            )
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
        .jsx-8256865853 .button {
          margin-bottom: 0.4rem;
        }
      `}</style>
    </>
  )
}

export default MyAccount
