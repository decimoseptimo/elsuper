import React from "react"
import { FaBars } from "react-icons/fa"

const IconBars = (props) => (
  <>
    <div className="iconBars">
      <FaBars color="#e0b324" />
    </div>
    <style jsx>{`
      .iconBars {
        border: 1px solid #e0b324;
        padding: 0.2rem 0.3rem;
        border-radius: 3px;
        padding: 4px 4px 1px 4px;
        position: relative;
        top: -3px;
      }
    `}</style>
  </>
)

export default IconBars
