import React from "react"
import { useLocation } from "@reach/router"

import { setRoutes } from "../../../router"
import { MY_ACCOUNT, LOGIN } from "../../routes"
import Form from "./forms/signupForm"
import "../panel.css"

export default function Signup(props) {
  const location = useLocation()

  return (
    <>
      <div className="panel">
        <Form
          onSubmit={() => alert("SERVICE UNAVAILABLE")}
          onLogin={() => setRoutes(location, [MY_ACCOUNT, LOGIN])}
        />
      </div>
    </>
  )
}
