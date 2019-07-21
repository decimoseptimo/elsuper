import React from "react"
import { default as RcInputNumber } from "rc-input-number"

import "rc-input-number/assets/index.css"
import { FaCaretUp, FaAngleUp, FaAngleDown, FaCaretDown } from "react-icons/fa"

const InputNumber2 = props => (
  <>
    <RcInputNumber
      {...props}
      onChange={value => {
        if (!value) return
        props.onChange(value)
      }}
      className={`inputNumber2 ${props.className}`}
      type="number"
      upHandler={<FaAngleUp />}
      downHandler={<FaAngleDown />}
    />
    <style jsx global>{`
      .inputNumber2 {
        margin: 0;
        padding: 0;
        border: 1px solid #d9d9d9;

        display: flex;
        line-height: 1.9rem;
        font-size: 1rem;
        border-radius: 3px;
        height: auto;
        // max-width: 100px;
        min-width: 5rem;
        background-color: white;
      }

      .inputNumber2 .rc-input-number-handler-wrap {
        float: none;
        border-left: none;
        width: auto;
        height: auto;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;

        display: flex;
        flex: 0 0 20px;
        flex-flow: column wrap;
        border-right: none;
        border-left: 1px solid #d9d9d9;
        order: 1;
        font-size: 0.8rem;
      }

      .inputNumber2 .rc-input-number-input::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      .inputNumber2 .rc-input-number-handler {
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

      .inputNumber2 .rc-input-number-input-wrap {
        overflow: hidden;
        height: auto;

        padding: 0;
        flex: 1;
      }
    `}</style>
  </>
)

export default InputNumber2
