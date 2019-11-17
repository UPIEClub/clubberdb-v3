import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  Card,
  Input,
  Button,
  Image,
  Header,
  Container,
  Dimmer,
  Loader,
  Message,
} from "semantic-ui-react"
import classNames from "classnames"

import { verticalAlignCenter } from "./login.module.scss"
import Layout from "../Layout/Layout"

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

  return (
    <Layout title="Inside the Club - Login">
      <Container textAlign="center" className={classNames(verticalAlignCenter)}>
        <Dimmer inverted>
          <Loader>Verifying your credentials, please wait...</Loader>
        </Dimmer>
        <Img fixed={logo.placeholderImage.childImageSharp.fixed} />
        {/* <Image src={ieclub} centered size="tiny" /> */}
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
              // onChange={this.onChange}
              // onKeyDown={this.handleKeyDown}
            />
            <br />
            <Input
              fluid
              type="password"
              name="password"
              icon="key"
              iconPosition="left"
              placeholder="Password"
              // onChange={this.onChange}
              // onKeyDown={this.handleKeyDown}
            />
          </Card.Content>
          <Card.Content>
            <Button
              fluid
              color="green"
              // onClick={this.logIn}
            >
              Login
            </Button>
            <br />
            No account yet? <a href="/signup">Sign up here.</a>
            <br />
            Forgot your password?{" "}
            <a href="/forgot-password">Reset your password here.</a>
          </Card.Content>
          {/* {this.state.showMessage && (
            <Message attached warning>
              Your account is not yet verified. Contact your VP or Internals on
              verifying your account.
            </Message>
          )}
          {this.state.wrongCredentials && (
            <Message attached error>
              Invalid username/password.
            </Message>
          )} */}
        </Card>
      </Container>
    </Layout>
  )
}

export default Login
