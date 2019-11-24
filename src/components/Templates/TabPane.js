import React from "react"
import { Tab } from "semantic-ui-react"

const TabPane = ({ children }) => (
  <Tab.Pane>
    <div className="m-2">{children}</div>
  </Tab.Pane>
)

export default TabPane
