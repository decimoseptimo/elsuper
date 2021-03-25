import React from "react"

const Button = (props) => {
  return (
    <>
      <button {...props} className={`button ${props.className}`}>
        {props.children}
      </button>
      <style jsx>{`
         {
          margin-bottom: 1px; /* fixes bottom border rendering clipped on mobile */
          padding: 0.9rem 1.8rem;
          border: 1px solid #ddd;
          cursor: pointer;
          text-decoration: none;
          font-size: 1rem;
          font-family: "Source Sans Pro", HelveticaNeue-Light,
            "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
            "Lucida Grande", sans-serif;
        }

        .fluid {
          width: 100%;
        }

        .round {
          border-radius: 3px;
        }

        .default {
        }

        .default2 {
          background: linear-gradient(to bottom, #f9f9f9, #dfdfdf);
          color: #333;
        }

        .default3 {
          background: linear-gradient(to bottom, #f9f9f9, #f5f5f5);
          color: #333;
        }

        .primary {
          color: #fff;
          background-color: #96588a;
          border-color: #96588a;
          font-weight: 600;
          font-style: italic;
        }

        .primary-active {
          background-color: #613458;
        }

        .primary2 {
          width: 100%;
          text-transform: uppercase;
          font-weight: 600;
          background: #fff;
          color: #96588a;
          border-color: #eee;
        }

        .primary2-active {
          // background-color: #613458;
          color: indianred;
        }
      `}</style>
    </>
  )
}

export default Button
