import React from "react"
import { Link } from "gatsby"
import { Button } from "semantic-ui-react"

import Image from "../components/image"
import PrivateLayout from "../components/Layout/PrivateLayout"

const IndexPage = () => (
  <PrivateLayout title="Home">
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Button color="yellow">Hello</Button>
  </PrivateLayout>
)

export default IndexPage
