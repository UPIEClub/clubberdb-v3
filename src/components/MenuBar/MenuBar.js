import React from "react"
import { Menu, Icon } from "semantic-ui-react"
import { isAdmin } from "../../services/auth"

const MenuBar = () => {
  return (
    <Menu color="red" inverted stackable className="mb-3">
      <MenuBarItem isHeader href="/" label="Inside the Club" />
      {isAdmin() && (
        <MenuBarItem href="/" label="Switch to Admin Mode" icon="shield" />
      )}
      <Menu.Menu position="right">
        <MenuBarItem href="/internals" label="Internals" icon="home" />
        <MenuBarItem href="/login" label="Logout" icon="sign-out" />
      </Menu.Menu>
    </Menu>
  )
}

const MenuBarItem = ({ isHeader, href, label, icon }) => (
  <Menu.Item header={isHeader} href={href}>
    {icon && <Icon name={icon} />} {label}
  </Menu.Item>
)

export default MenuBar
