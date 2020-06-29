import React, { useState } from "react"

import LoginForm from "./forms/loginForm"
// import RegisterForm from "./myAccount/registerForm"
// import PasswordResetForm from "./myAccount/passwordResetForm"
import "../panel.css"
import "./forms/form.css"

<<<<<<< HEAD
const UserAccount = props => {
  const [activeForm, setActiveForm] = useState(()=>LoginForm)
  const onSubmit = data => console.log(data)
  const handleClick = value => setActiveForm(value)
  const formProps = {onSubmit, handleClick: handleClick.bind(this)}
=======
const UserAccount = (props) => {
  const [activeForm, setActiveForm] = useState(() => LoginForm)
  const onSubmit = (data) => console.log(data)
  const handleClick = (value) => setActiveForm(value)
  const formProps = { onSubmit, handleClick: handleClick.bind(this) }
>>>>>>> d5bb38a... Prettier 'src' folder (newest prettier@v2)

  return <div className="panel userAccount">
      {React.createElement(activeForm, formProps, null)}
      <style jsx>{`
      .panel.userAccount {
        margin-bottom: 2rem;
      }
      `}</style>
  </div>
}

export default UserAccount
