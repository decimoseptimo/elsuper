import React from "react"
import { useLocation } from "@reach/router"

import { setRoutes } from "../../../router"
import { MY_ACCOUNT } from "../../routes"
import ProfileForm from "../misc/forms/profileForm"

const Profile = (props) => {
  const location = useLocation()

  return (
    <>
      <div className="sub panel cart">
        <ProfileForm handleClick={() => setRoutes(location, [MY_ACCOUNT])} />
      </div>
    </>
  )
}

export default Profile
