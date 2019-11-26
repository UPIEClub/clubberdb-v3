import React from "react"
import PrivateAdminLayout from "../Layout/PrivateAdminLayout"
import { Container } from "semantic-ui-react"

const AdminHome = () => {
  return (
    <PrivateAdminLayout title="Admin">
      <Container>
        <p>Hello world!</p>
      </Container>
    </PrivateAdminLayout>
  )
}

export default AdminHome
