import React, { useState, useEffect } from "react"
import { MdAdd, MdRemove } from "react-icons/md"

import BaseButton from "./baseButton"

const InputNumber = ({
  className,
  value = 1,
  /*setValue,*/ precision = 0,
  step = 1,
  min,
  max,
  onChange,
  onDelete,
}) => {
  console.log("\nInputNumber!")
  console.log(value)

  //returns formatted string (e.g. if precision=1, formats 1.01 to "1.0")
  const formatToString = value => {
    return parseFloat(value).toFixed(precision)
  }

  //returns formatted number (e.g. if precision=1, formats 1.01 to 1)
  const formatToNumber = value => {
    return parseFloat(parseFloat(value).toFixed(precision))
  }

  // const [numberValue, setNumberValue] = useState(value)
  const [numberValue, setNumberValue] = useState(() => {
    console.log(`-----useState ${value}`)
    return value
  })
  const [stringValue, setStringValue] = useState(() => formatToString(value))

  useEffect(() => initializeValue(value), [value])

  //returns float number (e.g. 1, 1.1)
  const getValue = value => parseFloat(value)

  const setValues = value => {
    console.log("--setValues")
    console.log(value)
    console.log(formatToNumber(value))
    console.log(formatToString(value))
    //Js math is buggy (e.g. result = 2.2 - 1 = 1.2000000000000002)
    setNumberValue(formatToNumber(value))
    setStringValue(formatToString(value))
    if (onChange) onChange(formatToNumber(value))
  }

  //TODO: add validation
  const initializeValue = value => {
    setNumberValue(getValue(value))
    setStringValue(formatToString(value))
  }

  const getValidatedValue = value => {
    console.log("getValidatedValue")
    console.log(value)

    //check valid number
    if (value === "" || Number.isNaN(value)) return 0

    //check repeated updates
    if (formatToString(value) === formatToString(value))
      return setStringValue(formatToString(value)) //bail update

    //check lower limit
    if (getValue(value) < min) {
      if (value === min) return setStringValue(formatToString(value)) //bail update
      return min
    }

    //check upper limit
    if (getValue(value) > max) {
      if (value === max) return setStringValue(formatToString(value)) //bail update
      return max
    }

    return value //update to value
  }

  const updateValue = stringValue => {
    console.log("updateValue")
    console.log(stringValue)

    //check valid number
    if (stringValue === "" || Number.isNaN(stringValue)) return setValues(0) //update to 0

    //check repeated updates
    if (formatToString(stringValue) === formatToString(value))
      return setStringValue(formatToString(value)) //bail update

    //check lower limit
    if (getValue(stringValue) < min) {
      if (value === min) return setStringValue(formatToString(value)) //bail update
      return setValues(min) //update to min
    }

    //check upper limit
    if (getValue(stringValue) > max) {
      if (value === max) return setStringValue(formatToString(value)) //bail update
      return setValues(max) //update to max
    }

    setValues(stringValue) //update to value
  }

  //Handlers
  const handleClickDown = () => {
    // console.log('handleClickDown')
    // console.log(value-step)
    if (value === min) {
      if (onDelete) onDelete()
      return
    }
    if (value - step < min) return setValues(min)
    setValues(value - step)
  }

  const handleClickUp = () => {
    // console.log('handleClickUp')
    // console.log(value+step)
    if (value === max) return
    if (value + step > max) return setValues(max)
    setValues(value + step)
  }

  const handleChange = e => {
    setStringValue(e.target.value)
  }

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      e.target.blur()
    } else if (e.key === "Escape") {
      //TODO: esc should bail update
      //setStringValue(formatToString(value)) //bail update
      e.target.blur()
    }
  }

  const handleBlur = e => {
    updateValue(e.target.value)
  }

  return (
    <>
      <div className={`inputNumber ${className}`}>
        <BaseButton
          className="in-button subtract"
          aria-label="subtract button"
          onClick={handleClickDown}
        >
          <MdRemove />
        </BaseButton>
        <input
          className="input"
          value={stringValue}
          type="number"
          min={min}
          max={max}
          step="any"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
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
      
      .inputNumber.style3 .in-button.subtract {
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
     
      .inputNumber.style4 .in-button.subtract {
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
  )
}

export default InputNumber
