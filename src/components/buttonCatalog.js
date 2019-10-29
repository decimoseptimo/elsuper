import React from "react"
import { FaBars } from "react-icons/fa"

const ButtonCatalog = props => (
  <>
    <div className="barsButton">
      <FaBars color="white" />
    </div>
    <style jsx>{`
      .barsButton {
        border: 1px solid white;
        padding .2rem .3rem;
        border-radius: 3px;
        position: relative;
        top: -5px;
      }
    `}</style>
    <style jsx global>{`
      .barsButton svg {
        position: relative;
        top: 2px;
      }
    `}</style>
  </>
)

export default ButtonCatalog
