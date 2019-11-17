import React, { Fragment } from "react"
import SEO from "../seo"

const Layout = ({ children, title }) => (
  <Fragment>
    <SEO title={title} />
    {children}
  </Fragment>
)

export default Layout
