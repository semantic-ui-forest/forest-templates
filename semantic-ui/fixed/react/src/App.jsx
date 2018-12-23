import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  Icon,
  List,
  Menu,
  Segment
} from "semantic-ui-react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item as="a" header>
              <Image
                size="mini"
                src="/static/images/logo.png"
                style={{ marginRight: "1.5em" }}
              />
              Project Name
            </Menu.Item>
            <Menu.Item as="a">Home</Menu.Item>

            <Dropdown item simple text="Dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                  <Icon name="dropdown" />
                  <span className="text">Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>

        <Container text style={{ marginTop: "7em" }}>
          <Header as="h1">Semantic UI React Fixed Template</Header>
          <p>
            This is a basic fixed menu template using fixed size containers.
          </p>
          <p>
            A text container is used for the main container, which is useful for
            single column layouts.
          </p>

          <Image
            src="/static/images/wireframe/media-paragraph.png"
            style={{ marginTop: "2em" }}
          />
          <Image
            src="/static/images/wireframe/paragraph.png"
            style={{ marginTop: "2em" }}
          />
          <Image
            src="/static/images/wireframe/paragraph.png"
            style={{ marginTop: "2em" }}
          />
          <Image
            src="/static/images/wireframe/paragraph.png"
            style={{ marginTop: "2em" }}
          />
          <Image
            src="/static/images/wireframe/paragraph.png"
            style={{ marginTop: "2em" }}
          />
          <Image
            src="/static/images/wireframe/paragraph.png"
            style={{ marginTop: "2em" }}
          />
          <Image
            src="/static/images/wireframe/paragraph.png"
            style={{ marginTop: "2em" }}
          />
        </Container>

        <Segment
          inverted
          vertical
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        >
          <Container textAlign="center">
            <Grid divided inverted stackable>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Group 1" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Group 2" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Group 3" />
                <List link inverted>
                  <List.Item as="a">Link One</List.Item>
                  <List.Item as="a">Link Two</List.Item>
                  <List.Item as="a">Link Three</List.Item>
                  <List.Item as="a">Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header inverted as="h4" content="Footer Header" />
                <p>
                  Extra space for a call to action inside the footer that could
                  help re-engage users.
                </p>
              </Grid.Column>
            </Grid>

            <Divider inverted section />
            <Image centered size="mini" src="/static/images/logo.png" />
            <List horizontal inverted divided link size="small">
              <List.Item as="a" href="#root">
                Site Map
              </List.Item>
              <List.Item as="a" href="#root">
                Contact Us
              </List.Item>
              <List.Item as="a" href="#root">
                Terms and Conditions
              </List.Item>
              <List.Item as="a" href="#root">
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default App;
