import React from "react"

const useHasMountedAndHasValue = (value) => {
  const [hasMountedAndHasValue, setHasMountedAndHasValue] = React.useState(
    false
  )
  React.useEffect(() => {
    if (value) setHasMountedAndHasValue(true)
  }, [])
  return hasMountedAndHasValue
}

export default useHasMountedAndHasValue
