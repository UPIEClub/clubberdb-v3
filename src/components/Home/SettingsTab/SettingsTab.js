import React from "react"
import { Header, Tab } from "semantic-ui-react"

const SettingsTab = () => {
  return (
    <Tab.Pane>
      <div className="m-2">
        <Header as="h3" dividing>
          Login
        </Header>
        <Header as="h3" dividing>
          Personal Information
        </Header>
      </div>
    </Tab.Pane>
  )
}

export default SettingsTab
