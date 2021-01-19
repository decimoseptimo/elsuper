import React from "react"
import PropTypes from "prop-types"

const Overlay = ({ isActive = false, onClick }) => (
  <>
    <div className={`overlay ${isActive && "visible"}`} onClick={onClick} />
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
  // isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Overlay
