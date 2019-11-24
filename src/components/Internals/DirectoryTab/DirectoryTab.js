import React, { useState, useEffect } from "react"
import { Input, Header, Icon, Loader } from "semantic-ui-react"

import TabPane from "../../Templates/TabPane"
import api from "../../../services/api"
import DataTable from "../../Templates/DataTable"
import DirectoryTableRow from "./DirectoryTableRow"

const headers = ["Student Number", "Name", "Committee", "Project", "Position"]

const DirectoryTab = () => {
  const [results, setResults] = useState([])
  const [profiles, setProfiles] = useState([])
  const [isLoading, setLoading] = useState(true)

  const search = (_, { value }) => {
    if (value !== "") {
      let searchResults = profiles.filter(item => {
        let query = value.toLowerCase()
        let student_number = item.student_number.toLowerCase()
        let name = `${item.first_name.toLowerCase()} ${item.nick_name.toLowerCase()} ${item.last_name.toLowerCase()}`
        return student_number.includes(query) || name.includes(query)
      })
      setResults(searchResults)
    } else setResults([])
  }

  useEffect(() => {
    api
      .get("profiles/")
      .then(response => {
        setProfiles(response.data)
        setLoading(false)
      })
      .then(error => setLoading(false))
  }, [])

  if (isLoading)
    return (
      <TabPane>
        <Header as="h2">
          <Icon name="users" /> Directory
        </Header>
        <Loader
          active
          inline="centered"
          content="Loading data, please wait..."
        />
      </TabPane>
    )

  return (
    <TabPane>
      <Header as="h2">
        <Icon name="users" /> Directory
      </Header>
      <Input
        icon="search"
        onChange={search}
        placeholder="Search by name/student number..."
        fluid
      />
      {results.length > 0 && (
        <DataTable headers={headers}>
          {results.map((item, index) => {
            if (index < 5) return <DirectoryTableRow profile={item} />
            return null
          })}
        </DataTable>
      )}
    </TabPane>
  )
}

export default DirectoryTab
