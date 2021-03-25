import React from "react"
import { useForm } from "react-hook-form"
import { Link } from "gatsby"

import Button from "../../../../button"
import BaseButton from "../../../../baseButton"
import "./form.css"

const LoginForm = ({ onSubmit, onPasswordReset, onSignup }) => {
  const { register, handleSubmit, errors, setError, clearErrors } = useForm()

  return (
    <div className="form loginForm">
      <h2 className="title">Iniciar sesión</h2>
      <form
        className="form"
        onSubmit={handleSubmit((data /* , e */) => onSubmit(data, setError))}
        onChange={() => {
          clearErrors("auth")
        }}
      >
        <div className="field">
          <label htmlFor="username" className="visuallyHidden">
            Nombre de usuario
          </label>
          <input
            id="username"
            type="text"
            placeholder="Nombre de usuario"
            name="username"
            ref={register({
              required: true /* , minLength: 1, maxLength: 100 */,
            })}
          />
          {errors.username && errors.username.type === "required" && (
            <div className="error">Nombre de usuario es requerido</div>
          )}
        </div>
        <div className="field">
          <label htmlFor="password" className="visuallyHidden">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            name="password"
            ref={register({
              required: true,
              minLength: 4 /* , maxLength: 100  */,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <div className="error">Contraseña es requerido</div>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <div className="error">Contraseña es minimo 4 caracteres</div>
          )}
          {errors.auth && errors.auth.type === "loginFailed" && (
            <div className="error">{errors.auth.message}</div>
          )}
        </div>
        <div className="field remember">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            ref={register()}
          />
          <label htmlFor="remember">Recordarme</label>
          <BaseButton
            className="forgotPassword"
            type="button"
            onClick={() => onPasswordReset()}
          >
            ¿Olvidaste tu contraseña?
          </BaseButton>
        </div>
        <Button className="primary fluid">Iniciar Sesión</Button>
        <p className="legend">
          Al iniciar sesión, aceptas nuestras{" "}
          <Link to="/#">Condiciones de uso</Link> y{" "}
          <Link to="/#">Aviso de privacidad.</Link>
        </p>

        <p className="pre-button">
          <span>¿Aún no tienes cuenta?</span>
        </p>
        <Button
          type="button"
          onClick={() => onSignup()}
          className="default fluid round"
        >
          Crear cuenta
        </Button>
      </form>
    </div>
  )
}

export default LoginForm
