import React from "react"
import PropTypes from "prop-types"

const Sidepanel = (props) => (
  <>
    <div
      className={`sidepanel ${props.className} ${props.right && "right"}  ${
        props.isOpen && "isOpen"
      }`}
    >
      {props.children}
    </div>
    <style jsx global>{`
      .sidepanel {
        position: fixed;
        top: 0;
        bottom: 0;
        margin-top: 4.6rem;
        transition: all 0.5s ease 0s;
        z-index: 110;
        width: 100%;
        background-color: #fff;
        box-shadow: 0px 0 6px 0px #e0e0e0;
        transform: translate3d(-100%, 0px, 0px);
      }

      .sidepanel.isOpen {
        transform: translate3d(0, 0px, 0px);
      }

      .sidepanel.right {
        right: 0;
        transform: translate3d(100%, 0px, 0px);
      }

      .sidepanel.right.isOpen {
        transform: translate3d(0, 0px, 0px);
      }

      .sidepanel .simplebar-content {
        padding: 2rem 2rem 2rem !important;
      }

      .sidepanel.right .simplebar-content {
        padding: 2rem 1rem 0 !important;
      }

      @media screen and (min-width: 300px) {
        .sidepanel {
          width: 270px;
        }

        .sidepanel.right {
          width: 100%;
        }
      }

      @media screen and (min-width: 450px) {
        .sidepanel.right .simplebar-content {
          padding: 2rem 2rem 0 !important;
        }
      }

      @media screen and (min-width: 550px) {
        .sidepanel.right {
          width: 500px;
        }
      }
    `}</style>
  </>
)

Sidepanel.propTypes = {
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default Sidepanel
