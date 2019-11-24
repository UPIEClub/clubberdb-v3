import React, { useState, useEffect } from "react"
import PrivateLayout from "../Layout/PrivateLayout"
import { Container, Tab, Header } from "semantic-ui-react"
import ProfileTab from "./ProfileTab/ProfileTab"
import SettingsTab from "./SettingsTab/SettingsTab"

const Home = () => {
  const [name, setName] = useState(null)

  useEffect(() => {
    const profile = JSON.parse(sessionStorage.getItem("profileDetails"))
    let firstName
    if (profile) firstName = profile.first_name
    else firstName = null

    setName(firstName)
  }, [])

  return (
    <PrivateLayout title="Home">
      <Container>
        <Header as="h2">Welcome, {name ? name : "Clubber"}!</Header>
        <Tab
          menu={{ fluid: true, vertical: true, tabular: "right" }}
          panes={[
            {
              menuItem: "Dashboard",
              render: () => <Tab.Pane>Dashboard</Tab.Pane>,
            },
            {
              menuItem: "Profile",
              render: () => <ProfileTab />,
            },
            {
              menuItem: "Settings",
              render: () => <SettingsTab />,
            },
          ]}
        />
      </Container>
    </PrivateLayout>
  )
}

export default Home
