import React from "react"
import { Table } from "semantic-ui-react"

const DirectoryTableRow = ({ profile }) => (
  <Table.Row>
    <Table.Cell>{`${profile.student_number.slice(
      0,
      profile.student_number.length - 3
    )}XXX`}</Table.Cell>
    <Table.Cell>{`${profile.first_name} ${profile.last_name}`}</Table.Cell>
    <Table.Cell>{profile.primary_committee}</Table.Cell>
    <Table.Cell>{profile.primary_project}</Table.Cell>
    <Table.Cell>{profile.primary_position}</Table.Cell>
  </Table.Row>
)

export default DirectoryTableRow
