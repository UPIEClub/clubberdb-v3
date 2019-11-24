import React from "react"
import { Table } from "semantic-ui-react"

const DataTable = ({ children, headers }) => (
  <Table color="red" selectable>
    <Table.Header>
      <Table.Row>
        {headers.map(item => (
          <Table.HeaderCell>{item}</Table.HeaderCell>
        ))}
      </Table.Row>
    </Table.Header>
    <Table.Body>{children}</Table.Body>
  </Table>
)

export default DataTable
