import React, { useState } from "react"

import LoginForm from "./forms/loginForm"
// import RegisterForm from "./myAccount/registerForm"
// import PasswordResetForm from "./myAccount/passwordResetForm"
import "../panel.css"
import "./forms/form.css"

const UserAccount = props => {
  const [activeForm, setActiveForm] = useState(()=>LoginForm)
  const onSubmit = data => console.log(data)
  const handleClick = value => setActiveForm(value)
  const formProps = {onSubmit, handleClick: handleClick.bind(this)}

  return (
      <div className="panel userAccount">
      {React.createElement(activeForm, formProps, null)}
    </div>
  )
}

export default UserAccount
