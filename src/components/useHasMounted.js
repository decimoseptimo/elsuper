import React from "react"

<<<<<<< HEAD
const useHasMounted = props => {
    const [hasMounted, setHasMounted] = React.useState(false);
    React.useEffect(() => {
      setHasMounted(true);
    }, []);
    return hasMounted;
  }
=======
const useHasMounted = (props) => {
  const [hasMounted, setHasMounted] = React.useState(false)
  React.useEffect(() => {
    setHasMounted(true)
  }, [])
  return hasMounted
}
>>>>>>> d5bb38a... Prettier 'src' folder (newest prettier@v2)

export default useHasMounted
