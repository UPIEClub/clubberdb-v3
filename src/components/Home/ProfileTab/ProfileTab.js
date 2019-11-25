import React, { useEffect, useState, Fragment } from "react"
import {
  Tab,
  Header,
  Icon,
  Dimmer,
  Loader,
  Grid,
  Accordion,
} from "semantic-ui-react"
import data from "../../../configs/profileFullDetails.json"

const FullDetails = ({ profile }) => (
  <Fragment>
    <div>
      <i>In case of emergency</i>
    </div>
    <div>
      <Icon name="user" className="mr-2" />
      {profile.emergency_contact_person}
    </div>
    <div>
      <Icon name="heartbeat" className="mr-2" />
      {profile.emergency_contact_relationship}
    </div>
    <div>
      <Icon name="phone" className="mr-2" />
      {profile.emergency_contact_number}
    </div>
    <div className="mb-2">
      <Icon name="mail" className="mr-2" />
      {profile.emergency_contact_email}
    </div>
    {data.map(item => (
      <div>
        <Icon name="info circle" className="mr-2" />
        <i>{item.label}</i> {profile[item.name]}
      </div>
    ))}
  </Fragment>
)

const ProfileTab = () => {
  const [profile, setProfile] = useState({})

  useEffect(() => {
    setProfile(JSON.parse(sessionStorage.getItem("profileDetails")))
  }, [])

  if (!profile.student_number)
    return (
      <Dimmer active inverted>
        <Loader inverted>Please wait...</Loader>
      </Dimmer>
    )

  return (
    <Tab.Pane>
      <div className="m-2">
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Icon name="user" circular inverted color="red" size="huge" />
            </Grid.Column>
            <Grid.Column width={13}>
              <Header as="h2">
                {" "}
                <Header.Content>
                  {profile.first_name} {profile.last_name}
                  <Header.Subheader>{profile.student_number}</Header.Subheader>
                </Header.Content>
              </Header>
              <div>
                <Icon name="suitcase" className="mr-2" />
                {profile.primary_position && profile.primary_project
                  ? `${profile.primary_position} - ${profile.primary_project}`
                  : "TBA"}
              </div>
              <div className="mb-2">
                <Icon name="sitemap" className="mr-2" />
                {profile.primary_committee ? profile.primary_committee : "TBA"}
              </div>
              <div>
                <Icon name="graduation" className="mr-2" />
                {profile.degree_program}
              </div>
              <div>
                <Icon name="mail" className="mr-2" />
                {profile.email}
              </div>
              <div>
                <Icon name="phone" className="mr-2" />
                {profile.mobile_number}
              </div>
              <div>
                <Icon name="home" className="mr-2" />
                {profile.present_city}
                {", "}
                {profile.present_province}
              </div>
              <Accordion
                className="mt-2"
                exclusive={false}
                panels={[
                  {
                    key: "full-details",
                    title: "Full details",
                    content: {
                      content: <FullDetails profile={profile} />,
                    },
                  },
                ]}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Tab.Pane>
  )
}

export default ProfileTab
