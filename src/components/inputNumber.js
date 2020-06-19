import React from "react"
import { default as RcInputNumber } from "rc-input-number"
import "rc-input-number/assets/index.css"

import { FaAngleUp, FaAngleDown, FaCaretDown } from "react-icons/fa"
import { MdAdd, MdRemove } from "react-icons/md"
// import { RiAddLine, RiSubtractLine } from "react-icons/ri"

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
      // upHandler={<FaAngleUp />}
      // downHandler={<FaAngleDown />}
      upHandler={<MdAdd />}
      downHandler={<MdRemove />}
    />
    <style jsx global>{`
      .rc-input-number {
        vertical-align: inherit;
        border: 0;
        line-height: inherit;
        height: auto;
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
        display: none;
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
        height: auto;
        flex: 1;
        font-family: sans-serif;
        overflow: inherit;
      }
      
      .inputNumber .rc-input-number-input-wrap input {
        font-size: 1rem;
        line-height: inherit;
        padding: .91rem .1rem;
        border-radius: 0;
      }
      
      /* Style2 */      
      .updateInput.style2 {
        border: 1px solid #eee;
        border-radius: 3px;
      }
      
      .updateInput.style2 .in-button {
        color: indianred;
        padding: .8rem .5rem;
      }
      
      .updateInput.style2 .in-button svg {
        position: relative;
        top: 2px;
      }

      /* Style3 */
      .style3.updateInput {
        background: #fff;
      }
      
      .style3.updateInput .inputNumber .rc-input-number-input-wrap input {
        border: 1px solid #ddd;
      }
      
      .style3.updateInput .in-button.remove {
        border: 1px solid #ddd;
        border-right: 0;
        border-radius: 3px 0 0 3px;
      }

      .style3.updateInput .in-button.add {
        border: 1px solid #ddd;
        border-left: 0;
        border-radius: 0 3px 3px 0;
      }
    `}</style>
  </>
)

export default InputNumber
