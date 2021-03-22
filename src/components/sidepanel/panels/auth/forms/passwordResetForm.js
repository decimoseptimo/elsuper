import React from "react"
import { useForm } from "react-hook-form"

import Button from "../../../../button"
import "./form.css"

const PasswordResetForm = ({ onSubmit, onLogin }) => {
  const { register, handleSubmit, errors } = useForm()

  return (
    <div className="form PasswordResetForm">
      <h2 className="title">Reestablecer contraseña</h2>
      <p>
        Ingresa el correo electrónico con el que te registraste, te enviaremos
        un enlace para restablecer tu contraseña.
      </p>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label htmlFor="email" className="visuallyHidden">
            Contraseña
          </label>
          <input
            id="email"
            type="text"
            placeholder="Correo electrónico"
            name="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && (
            <div className="error">Correo electrónico es requerido</div>
          )}
        </div>
        <Button className="primary fluid">Enviar</Button>

        <p className="pre-button">
          <span>¿Ya reestableciste la contraseña?</span>
        </p>
        <Button
          type="button"
          onClick={() => onLogin()}
          className="default fluid round"
        >
          Iniciar Sesión
        </Button>
      </form>
    </div>
  )
}

export default PasswordResetForm
