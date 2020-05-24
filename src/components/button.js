import React from "react"

const Button = props => {
  // const propsClone = Object.assign({}, props)
  // delete propsClone.className

  return (
    <>
      <button {...props} className={`button ${props.className}`}>{props.children}</button>
      {/*<button className={`button ${props.className}`} {...propsClone}>{props.children}</button>*/}
      <style jsx global>{`
        .button {
          padding: 0.91rem 1.8rem;
          border: 1px solid #ddd;
          cursor: pointer;
          text-decoration: none;
          font-size: 1rem;
          font-family: "Source Sans Pro", HelveticaNeue-Light,
            "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
            "Lucida Grande", sans-serif;
        }
        
        .button.fluid {
          width: 100%;
        }
        
        .button.round {
          border-radius: 3px;
        }
        
        .button.primary {
          color: #fff;
          font-weight: 600;
          background-color: #96588a;
          border-color: #96588a;
          font-style: italic;
        }
      `}</style>
    </>
  )
}

export default Button
