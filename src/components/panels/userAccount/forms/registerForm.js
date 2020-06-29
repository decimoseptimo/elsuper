import React from "react"
import { useForm } from "react-hook-form"
import  { Link } from "gatsby"

import Button from "../../../button"
import LoginForm from "./loginForm"

const RegisterForm = (props) => {
  const { register, handleSubmit, errors } = useForm()
  const {onSubmit, handleClick} = props

  return <div className="form registerForm">
    <h2 className="title">Crear cuenta</h2>
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label htmlFor="firstName" className="visuallyHidden">Nombre</label>
        <input id="firstName" type="text" placeholder="Nombre" name="firstName" ref={register({required: true, maxLength: 100})} />
        {errors.firstName && <div className="error">Nombre es requerido</div>}
      </div>
      <div className="field">
        <label htmlFor="lastName" className="visuallyHidden">Apellido</label>
        <input id="lastName" type="text" placeholder="Apellido" name="lastName" ref={register({required: true, maxLength: 100})} />
        {errors.lastName && <div className="error">Apellido es requerido</div>}
      </div>
      <div className="field">
        <label htmlFor="email" className="visuallyHidden">Correo electrónico</label>
        <input id="email" type="text" placeholder="Correo electrónico" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
        {errors.email && <div className="error">Correo electrónico es requerido</div>}
      </div>
      <div className="field">
        <label htmlFor="password" className="visuallyHidden">Contraseña</label>
        <input id="password" type="password" placeholder="Contraseña" name="password" ref={register({required: true, minLength: 8, maxLength: 100})} />
        {errors.password && errors.password.type === "required" && <div className="error">Contraseña es requerido</div>}
        {errors.password && errors.password.type === "minLength" && <div className="error">Contraseña es minimo 8 caracteres</div>}
      </div>
      <Button className="primary fluid">Crear cuenta</Button>
      <p>Al crear una cuenta, aceptas nuestras <Link to="/#">Condiciones de uso</Link> y <Link to="/#">Aviso de privacidad.</Link></p>

      <p className="pre-button"><span>¿Ya tienes cuenta?</span></p>
      <Button type="button" onClick={()=>handleClick(()=>LoginForm)} className="fluid round">Iniciar Sesión</Button>
    </form>
  </div>
}

export default RegisterForm
