import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import {
  Card,
  Input,
  Button,
  Header,
  Container,
  Dimmer,
  Loader,
  Message,
} from "semantic-ui-react"
import classNames from "classnames"

import { verticalAlignCenter } from "./login.module.scss"
import Layout from "../Layout/Layout"
import api from "../../services/api"
import { logOut } from "../../services/auth"

const Login = () => {
  const logo = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ieclub.png" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const [formData, setFormData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState({
    active: false,
    body: "",
    type: "",
  })

  const logIn = () => {
    setIsLoading(true)
    setMessage({ ...message, active: false })
    api
      .post("login/", formData)
      .then(response => {
        sessionStorage.setItem("isAuthenticated", "true")
        sessionStorage.setItem("clubberDetails", JSON.stringify(response.data))
        sessionStorage.setItem(
          "profileDetails",
          JSON.stringify(response.data.personal_details)
        )
        sessionStorage.setItem("studentNumber", formData.student_number)
        sessionStorage.setItem("id", response.data.id)
        if (response.data.is_admin) {
          sessionStorage.setItem("isAdmin", "true")
        }
        setIsLoading(false)
        if (response.data.is_pending)
          setMessage({
            active: true,
            body:
              "Your account is not yet verified. Contact your VP or Internals on verifying your account.",
            type: "warning",
          })
        else navigate("/")
      })
      .catch(error => {
        setMessage({
          active: true,
          body: "Invalid username/password.",
          type: "error",
        })
        setIsLoading(false)
      })
  }

  const onChange = (event, data) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleKeyDown = (event, data) => {
    if (event.key === "Enter") logIn()
  }

  useEffect(() => {
    logOut()
  }, [])

  return (
    <Layout title="Login">
      <Container textAlign="center" className={classNames(verticalAlignCenter)}>
        <Dimmer inverted active={isLoading}>
          <Loader>Verifying your credentials, please wait...</Loader>
        </Dimmer>
        <Img fixed={logo.placeholderImage.childImageSharp.fixed} />
        <Header as="h2" color="red">
          Inside the Club
        </Header>
        <Card centered>
          <Card.Content>
            <Card.Header>Log in to your account</Card.Header>
          </Card.Content>
          <Card.Content>
            <Input
              fluid
              icon="users"
              name="student_number"
              iconPosition="left"
              placeholder="Student Number"
              onChange={onChange}
              onKeyDown={handleKeyDown}
            />
            <br />
            <Input
              fluid
              type="password"
              name="password"
              icon="key"
              iconPosition="left"
              placeholder="Password"
              onChange={onChange}
              onKeyDown={handleKeyDown}
            />
          </Card.Content>
          <Card.Content>
            <Button fluid color="green" onClick={logIn}>
              Login
            </Button>
            <br />
            No account yet? <a href="/signup">Sign up here.</a>
            <br />
            Forgot your password?{" "}
            <a href="/forgot-password">Reset your password here.</a>
          </Card.Content>
          {message.active && (
            <Message
              attached
              error={message.type === "error"}
              warning={message.type === "warning"}
            >
              {message.body}
            </Message>
          )}
        </Card>
      </Container>
    </Layout>
  )
}

export default Login
