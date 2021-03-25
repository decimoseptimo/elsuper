import React from "react"

import { login } from "../../../../utils/auth"
import { navigate, useGetRelativeUrl } from "../../../router"
import { MY_ACCOUNT, SIGNUP, PASSWORD_RESET } from "../../routes"
import Form from "./forms/loginForm"
import "../panel.css"

export default function Login(props) {
  const signupUrl = useGetRelativeUrl(MY_ACCOUNT, SIGNUP)
  const myAccountUrl = useGetRelativeUrl(MY_ACCOUNT)
  const passwordResetUrl = useGetRelativeUrl(MY_ACCOUNT, PASSWORD_RESET)

  return (
    <>
      <div className="panel">
        <Form
          onSubmit={(data, setError) => {
            const result = login(data)
            if (!!result) navigate(myAccountUrl, { replace: true })
            else
              setError("auth", {
                type: "loginFailed",
                message: "Nombre de usuario o contraseña invalidos",
              })
          }}
          onSignup={() => navigate(signupUrl)}
          onPasswordReset={() => navigate(passwordResetUrl)}
        />
      </div>
    </>
  )
}
