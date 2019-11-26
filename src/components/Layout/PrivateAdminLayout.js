import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import { Location } from "@reach/router"

import Layout from "./Layout"
import { isAdmin } from "../../services/auth"
import { AdminMenuBar } from "../MenuBar/MenuBar"

const PrivateAdminLayout = ({ children, title }) => {
  const [isVerifying, setIsVerifying] = useState(true)

  useEffect(() => {
    setIsVerifying(false)
    if (!isAdmin()) navigate("/")
  }, [])

  if (isVerifying || !isAdmin()) return null
  else
    return (
      <Location>
        {({ location }) => (
          <Layout title={title}>
            <AdminMenuBar location={location} />
            {children}
          </Layout>
        )}
      </Location>
    )
}

export default PrivateAdminLayout
