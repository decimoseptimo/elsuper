import React from "react"
import { default as RcInputNumber } from "rc-input-number"

import "rc-input-number/assets/index.css"
import { FaCaretUp, FaAngleUp, FaAngleDown, FaCaretDown } from "react-icons/fa"

const InputNumber = props => (
  <>
    <RcInputNumber
      {...props}
      type="number"
      upHandler={<FaCaretUp />}
      downHandler={<FaCaretDown />}
    />
    <style jsx global>{`
      .rc-input-number {
        margin: 0;
        padding: 0;
        border: 1px solid #d9d9d9;

        display: flex;
        line-height: 1.9rem;
        font-size: 1rem;
        border-radius: 3px;
        height: auto;
        max-width: 100px;
      }

      .rc-input-number-handler-wrap {
        float: none;
        border-left: none;
        width: auto;
        height: auto;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;

        display: flex;
        flex: 0 0 30px;
        flex-flow: column wrap;
        border-left: none;
        border-right: 1px solid #d9d9d9;
      }

      .rc-input-number-input::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      .rc-input-number-handler {
        text-align: center;
        line-height: auto;
        height: auto;
        overflow: hidden;
        touch-action: none;

        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
      }

      .rc-input-number-input-wrap {
        overflow: hidden;
        height: auto;

        padding: 0.5rem;
        flex: 1;
      }
    `}</style>
  </>
)

export default InputNumber
