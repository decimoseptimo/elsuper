import React, { useState } from "react"
import { MdAdd, MdRemove } from "react-icons/md"

import BaseButton from "./baseButton"

const InputNumber = ({ className, value:asValue=1, precision=0, step=1, min, max }) => {

  const formatValue = (value, precision) => {
    console.log("formatValue:")
    console.log(value)
    console.log(precision)
    console.log(parseFloat(value).toFixed(precision))
    return parseFloat(value).toFixed(precision)
  }

  const [value, setValue2] = useState(formatValue(asValue, precision))

  const getValue = () => parseFloat(value)

  const setValue = (value) => {
    setValue2(formatValue(value, precision))
    console.log('setValue:')
    console.log(value)
    // console.log(formatValue(value, 0))
    // console.log(formatValue(value, 1))
    // console.log(formatValue(value, 2))
  }

  const updateValue = (theValue) => {
    const value = parseFloat(theValue)

    console.log('--value')
    console.log(value)

    if (Number.isNaN(value)) return setValue(0)

    if (theValue === min) return
    if (value-step < min) return setValue(min)

    if (theValue === max) return
    if (value+step > max) return setValue(max)

    setValue(value)
  }

  //Handlers
  const handleClickDown = () => {
    const value = getValue()

    if (value === min) return
    if (value-step < min) return setValue(min)
    setValue(value-step)
  }

  const handleClickUp = () => {
    const value = getValue()

    if (value === max) return
    if (value+step > max) return setValue(max)
    setValue(value+step)
  }

  const handleChange = (e) => {
    setValue2(e.target.value)
  }

  const handleBlur = (e) => {
    updateValue(e.target.value)
  }

  return <>
    <div className={`inputNumber ${className}`}>
      <BaseButton
        className="in-button remove"
        aria-label="remove button"
        onClick={handleClickDown}
      >
        <MdRemove />
      </BaseButton>
      <input
        className="input"
        value={value}
        type="number"
        min={min}
        max={max}
        step="any"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <BaseButton
        className="in-button add"
        aria-label="add button"
        onClick={handleClickUp}
      >
        <MdAdd />
      </BaseButton>
    </div>
    <style jsx global>{`
      .inputNumber input {
        text-align: center;
        border: none;
        padding: .91rem .1rem;
        // font-family: arial, sans-serif;
        // color: #666;
      }
      
      .inputNumber input[type=number]::-webkit-inner-spin-button, 
      .inputNumber input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
      }
      
      /* Style2 */
      .inputNumber.style2 input {
        max-width: 4rem;
        color: #666;
        font-family: arial, sans-serif;
      }
            
      .inputNumber.style2 {
        border: 1px solid #eee;
        border-radius: 3px;
      }
      
      .inputNumber.style2 .in-button {
        color: indianred;
        padding: .8rem .5rem;
      }
      
      .inputNumber.style2 .in-button svg {
        position: relative;
        top: 2px;
        stroke-width: 2;
      }

      /* Style3 */
      .inputNumber.style3 {
        background: #fff;
      }
      
      .inputNumber.style3 input {
        border: 1px solid #ddd;
        max-width: 5rem;
        vertical-align: top;
        font-size: 1.1rem;
      }
      
      .inputNumber.style3 .in-button {
        padding: .8rem .5rem;
        height 100%;
      }
      
      .inputNumber.style3 .in-button svg {
        position: relative;
        top: 2px;
        stroke-width: 2;
      }
      
      .inputNumber.style3 .in-button.remove {
        border: 1px solid #ddd;
        border-right: 0;
        border-radius: 3px 0 0 3px;
      }

      .inputNumber.style3 .in-button.add {
        border: 1px solid #ddd;
        border-left: 0;
        border-radius: 0 3px 3px 0;
      }
      
      /* Style4 */
      .inputNumber.style4 {
        height: 28px;
      }
      
      .inputNumber.style4 input {
        max-width: 3rem;
        border: 1px solid #eee;
        padding: 0;
        height: 100%;
        vertical-align: top;
        color: #444;
      }
      
      .inputNumber.style4 .in-button svg {
        stroke-width: 2px;
        position: relative;
        top: 1px;
        font-size: 12px;
        color: #444;
      }
     
      .inputNumber.style4 .in-button.remove {
        border: 1px solid #eee;
        border-right: 0;
        border-radius: 3px 0 0 3px;
        padding: 0.35rem .15rem;
        height: 100%;
      }

      .inputNumber.style4 .in-button.add {
        border: 1px solid #eee;
        border-left: 0;
        border-radius: 0 3px 3px 0;
        padding: 0.35rem .15rem;
        height: 100%;
      }
    `}</style>
  </>
}

export default InputNumber
