import React from "react"
import { Container, Tab } from "semantic-ui-react"

import PrivateLayout from "../Layout/PrivateLayout"
import DirectoryTab from "./DirectoryTab/DirectoryTab"

const Internals = () => {
  return (
    <PrivateLayout title="Internals">
      <Container>
        <Tab
          menu={{ fluid: true, vertical: true, tabular: "right" }}
          panes={[
            {
              menuItem: "Directory",
              render: () => <DirectoryTab />,
            },
            {
              menuItem: "Reaff",
              render: () => <Tab.Pane>Reaff</Tab.Pane>,
            },
          ]}
        />
      </Container>
    </PrivateLayout>
  )
}

export default Internals
