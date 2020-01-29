import React from "react"
import PropTypes from "prop-types"

const BgMenu2 = props => (
  <>
    <div {...props} className={`sidepanel ${props.className}`}>
      {props.children}
    </div>
    <style jsx>{`
      .sidepanel {
        position: fixed;
        top: 0;
        bottom: 0;
        margin-top: 4.8em;
        width: 270px;
        transition: all 0.5s ease 0s;

        z-index: 1;
        background-color: #fff;
        box-shadow: 0px 0 6px 0px #e0e0e0;
        transform: ${props.isOpen === true
          ? "translate3d(-100%, 0px, 0px)"
          : ""};
      }

      //Catalog
      .catalog2 {
        // padding: 2rem 2rem 2rem;
      }

      .cart {
        // padding: 2rem 1rem 0;
      }
    `}</style>
  </>
)

BgMenu2.propTypes = {
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default BgMenu2
