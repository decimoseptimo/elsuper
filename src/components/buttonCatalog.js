import React from "react"
import { FaBars } from "react-icons/fa"

const ButtonCatalog = (props) => (
  <>
    <div className="barsButton">
      <FaBars color="#e0b324" />
    </div>
    <style jsx>{`
      .barsButton {
        border: 1px solid #e0b324;
        padding: .2rem .3rem;
        border-radius: 3px;
        padding: 4px 4px 1px 4px;
        position: relative;
        top: -3px;
      }
    `}</style>
  </>
)

export default ButtonCatalog
