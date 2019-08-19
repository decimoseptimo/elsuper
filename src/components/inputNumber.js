import React from "react"
import { default as RcInputNumber } from "rc-input-number"

import "rc-input-number/assets/index.css"
import { FaCaretUp, FaAngleUp, FaAngleDown, FaCaretDown } from "react-icons/fa"

const InputNumber = props => (
  <>
    <RcInputNumber
      {...props}
      onChange={value => {
        if (!value) return
        props.onChange(value)
      }}
      className={`inputNumber ${props.className}`}
      type="number"
      upHandler={<FaAngleUp />}
      downHandler={<FaAngleDown />}
    />
    <style jsx global>{`
      .inputNumber {
        margin: 0;
        padding: 0;
        border: 1px solid #d9d9d9;

        display: flex;
        line-height: 1.9rem;
        font-size: 1rem;
        border-radius: 3px;
        height: auto;
        max-width: 7.1rem;
        background-color: white;
      }

      .inputNumber .rc-input-number-handler-wrap {
        float: none;
        border-left: none;
        width: auto;
        height: auto;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;

        display: flex;
        flex: 0 0 30px;
        flex-flow: column wrap;
        border-right: none;
        border-left: 1px solid #d9d9d9;
        order: 1;
      }

      .inputNumber .rc-input-number-input:invalid {
        box-shadow: none;
      }

      .inputNumber .rc-input-number-input::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      .inputNumber .rc-input-number-handler {
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

      .inputNumber .rc-input-number-input-wrap {
        overflow: hidden;
        height: auto;

        padding: 0.5rem;
        flex: 1;
      }
    `}</style>
  </>
)

export default InputNumber
