export function getLocalState() {
  try {
    const serializedData = localStorage.getItem("state")
    if (serializedData === null) {
      return undefined
    }
    return JSON.parse(serializedData)
  } catch (e) {
    return undefined
  }
}

export function setLocalState(data) {
  try {
    const serializedData = JSON.stringify(data)
    localStorage.setItem("state", serializedData)
  } catch (e) {}
}
