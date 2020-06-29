import React from "react"
import PropTypes from "prop-types"

const Overlay = (props) => (
  <>
    <div
<<<<<<< HEAD
      className={`overlay ${(props.isCategoriesOpen || props.isMyAccountOpen || props.isCartOpen) &&
        "visible"}`}
      onClick={e => {
=======
      className={`overlay ${
        (props.isCategoriesOpen || props.isMyAccountOpen || props.isCartOpen) &&
        "visible"
      }`}
      onClick={(e) => {
>>>>>>> d5bb38a... Prettier 'src' folder (newest prettier@v2)
        props.dispatch({ type: "CLOSE_CATEGORIES" })
        props.dispatch({ type: "CLOSE_CART" })
        props.dispatch({ type: "CLOSE_MY_ACCOUNT" })
      }}
    >
      {props.children}
    </div>
    <style jsx>{`
      .overlay {
        position: fixed;
        z-index: 100;
        width: 100%;
        background: rgba(0, 0, 0, 0.3);
        opacity: 0;
        height: 0;
        transition: opacity 0.3s ease 0s, height 0ms 0.3s;
      }

      .visible {
        opacity: 1;
        height: 100%;
        transition: opacity 0.3s ease 0s, height 0ms 0ms;
      }
    `}</style>
  </>
)

Overlay.propTypes = {
  isCategoriesOpen: PropTypes.bool.isRequired,
  isMyAccountOpen: PropTypes.bool.isRequired,
  isCartOpen: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default Overlay
