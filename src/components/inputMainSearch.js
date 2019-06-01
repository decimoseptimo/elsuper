import React from "react"
import { Input } from "semantic-ui-react"
import css from "styled-jsx/css"

const inputMainSearch = props => (
  <>
    <div className="ui icon input fluid">
      <input type="text" placeholder="¿Que estás buscando hoy?" />
      <i className="search link icon" />
    </div>
    <style jsx>{`
      .ui.input > input {
        color: darkseagreen;
        background: #393939;
        // font-style: italic;
      }

      .ui.input > input:focus {
        color: darkseagreen;
        background: #3e3e3e;
        border-color: #393939;
      }

      .ui.input > input::placeholder-shown {
        color: red;
      }

      .ui.input > input::placeholder {
        color: darkseagreen;
      }

      .ui.input>input::placeholder,
      .ui.input>input::-webkit-input-placeholder, /* Chrome/Opera/Safari */
      .ui.input>input::-moz-placeholder, /* Firefox 19+ */
      .ui.input>input:-ms-input-placeholder, /* IE 10+ */
      .ui.input>input:-moz-placeholder {
        /* Firefox 18- */
        color: darkseagreen;
      }

      .ui.icon.input > i.icon {
        opacity: 0.6;
      }

      .ui.icon.input > input:focus ~ i.icon {
        opacity: 0.7;
      }
    `}</style>
  </>
)

export default inputMainSearch
