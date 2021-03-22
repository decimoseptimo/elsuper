import React from "react"
import { useForm } from "react-hook-form"

import Button from "../../../../button"
import "./form.css"

const ProfileForm = ({ onSubmit, onClick }) => {
  const { register, handleSubmit, errors } = useForm()

  return (
    <div className="form">
      <h2 onClick={() => onClick()} className="title">
        <span>Datos Personales</span>
      </h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label htmlFor="name" className="visuallyHidden">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            placeholder="Nombre"
            name="name"
            ref={register({ required: true })}
          />
          {errors.name && <div className="error">Nombre es requerido</div>}
        </div>
        <div className="field">
          <label htmlFor="email" className="visuallyHidden">
            Correo electrónico
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
        <div className="field">
          <label htmlFor="phone" className="visuallyHidden">
            Celular
          </label>
          <input
            id="phone"
            type="text"
            placeholder="Celular"
            name="phone"
            ref={register({ required: true })}
          />
          {errors.phone && <div className="error">Celular es requerido</div>}
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
            ref={register({ required: true, minLength: 8, maxLength: 100 })}
          />
          {errors.password && errors.password.type === "required" && (
            <div className="error">Contraseña es requerido</div>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <div className="error">Contraseña es minimo 8 caracteres</div>
          )}
        </div>
        <Button className="fluid round default3" onClick={() => {}}>
          Guardar
        </Button>
      </form>
    </div>
  )
}

export default ProfileForm
