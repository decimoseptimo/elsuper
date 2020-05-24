import React from "react"
import { useForm } from "react-hook-form"

import Button from "../../../button"
import BaseButton from "../../../baseButton"
import RegisterForm from "./registerForm"
import PasswordResetForm from "./passwordResetForm"

const LoginForm = props => {
  const { register, handleSubmit, errors } = useForm()
  const { onSubmit, handleClick } = props

  return <div className="form loginForm">
    <h2 className="title">Iniciar sesión</h2>
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label htmlFor="email" className="visuallyHidden">Correo electrónico</label>
        <input id="email" type="text" placeholder="Correo electrónico" name="email"
               ref={register({ required: true, pattern: /^\S+@\S+$/i })}/>
        {errors.email && <div className="error">Correo electrónico es requerido</div>}
      </div>
      <div className="field">
        <label htmlFor="password" className="visuallyHidden">Contraseña</label>
        <input id="password" type="password" placeholder="Contraseña" name="password"
               ref={register({ required: true, minLength: 8, maxLength: 100 })}/>
        {errors.password && errors.password.type === "required" && <div className="error">Contraseña es requerido</div>}
        {errors.password && errors.password.type === "minLength" &&
        <div className="error">Contraseña es minimo 8 caracteres</div>}
      </div>
      <div className="field remember">
        <input type="checkbox" id="remember" name="remember" ref={register()}/>
        <label htmlFor="remember">Recordarme</label>
        <BaseButton className="forgotPassword" type="button" onClick={()=>handleClick(()=>PasswordResetForm)}>¿Olvidaste tu contraseña?</BaseButton>
      </div>
      <Button className="primary fluid">Iniciar Sesión</Button>

      <p className="pre-button"><span>¿Aún no tienes cuenta?</span></p>
      <Button type="button" onClick={()=>handleClick(()=>RegisterForm)} className="fluid round">Crear cuenta</Button>
    </form>
  </div>
}

export default LoginForm
