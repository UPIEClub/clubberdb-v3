import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"

import Layout from "./Layout"
import { isLoggedIn } from "../../services/auth"

const PrivateLayout = ({ children, title }) => {
  const [isVerifying, setIsVerifying] = useState(true)

  useEffect(() => {
    setIsVerifying(false)
    if (!isLoggedIn()) navigate("/login")
  }, [])

  if (isVerifying || !isLoggedIn()) return null
  else return <Layout title={title}>{children}</Layout>
}

export default PrivateLayout
