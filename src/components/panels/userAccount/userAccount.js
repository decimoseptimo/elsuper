import React, { useState } from "react"
import { navigate } from "@reach/router"

import LoginForm from "./forms/loginForm"
// import RegisterForm from "./myAccount/registerForm"
// import PasswordResetForm from "./myAccount/passwordResetForm"
import "../panel.css"
import "./forms/form.css"

const UserAccount = (props) => {
  const [activeForm, setActiveForm] = useState(() => LoginForm)
  const onSubmit = (data) => {
    console.log(data)
    navigate("?mi-cuenta")
  }
  const handleClick = (value) => setActiveForm(value)
  const formProps = { onSubmit, handleClick: handleClick.bind(this) }

  return (
    <div className="panel userAccount">
      {React.createElement(activeForm, formProps, null)}
      <style jsx>{`
        .panel.userAccount {
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  )
}

export default UserAccount
