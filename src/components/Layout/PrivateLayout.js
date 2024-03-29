import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import { Location } from "@reach/router"

import Layout from "./Layout"
import { isLoggedIn } from "../../services/auth"
import MenuBar from "../MenuBar/MenuBar"

const PrivateLayout = ({ children, title }) => {
  const [isVerifying, setIsVerifying] = useState(true)

  useEffect(() => {
    setIsVerifying(false)
    if (!isLoggedIn()) navigate("/login")
  }, [])

  if (isVerifying || !isLoggedIn()) return null
  else
    return (
      <Location>
        {({ location }) => (
          <Layout title={title}>
            <MenuBar location={location} />
            {children}
          </Layout>
        )}
      </Location>
    )
}

export default PrivateLayout
