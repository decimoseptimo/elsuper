import { useState } from "react"

export const useOpenSidepanels = (intialState = {}) => {
  const [openSidepanels, _setOpenSidepanels] = useState(intialState)

  const setOpenSidepanels = (name, operation = "add") => {
    const obj = { ...openSidepanels }
    obj[name] = operation === "add" ? true : false
    _setOpenSidepanels(obj)
  }

  return [openSidepanels, setOpenSidepanels]
}
