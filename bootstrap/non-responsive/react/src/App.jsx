import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Divider,
  Dropdown,
  Form,
  Grid,
  Header,
  List,
  Menu,
  Segment
} from "semantic-ui-react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu borderless fixed="top">
          <Container>
            <Menu.Item header>Project Name</Menu.Item>
            <Menu.Item active>Home</Menu.Item>
            <Menu.Item >About</Menu.Item>
            <Menu.Item >Contact</Menu.Item>
            <Dropdown item text="Dropdown">
              <Dropdown.Menu>
                <Dropdown.Item as="a" href="#root">
                  Action
                </Dropdown.Item>
                <Dropdown.Item as="a" href="#root">
                  Another Action
                </Dropdown.Item>
                <Dropdown.Item as="a" href="#root">
                  Something else here
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as="a" href="#root">
                  Separated link
                </Dropdown.Item>
                <Dropdown.Item as="a" href="#root">
                  One more separated link
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>
              <Form>
                <Form.Field inline>
                  <input placeholder="Search" type="text" />
                  {' '}
                  <Button type="submit">Submit</Button>
                </Form.Field>
              </Form>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item as="a" href="#root">
                Link
              </Menu.Item>
              <Menu.Item as="a" href="#root">
                Link
              </Menu.Item>
              <Menu.Item as="a" href="#root">
                Link
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>

        <Grid container>
          <Grid.Row>
            <Segment basic>
              <Header size="huge" as="h1">
                Non-responsive Semantic-UI
              </Header>
              <p className="lead">
                In fact, Semantic-UI's grid system, container and many other
                components are by default "non-responsive", they will{" "}
                <b>grow</b>
                {" "}
                or
                {" "}
                <b>shrink</b> as screen width changes, but they will not stack
                vertically on a small screen, unless you add "stackable" to it.
                You can also fix the container's width with simple CSS.
              </p>
              <p className="lead">
                Here are some keywords related to responsiveness:
              </p>
              <List bulleted>
                <List.Item>
                  <b>Stackable</b>: stack the items vertically on small screens
                </List.Item>
                <List.Item>
                  <b>Doubling</b>: double the items' width on every screen width
                  breakpoint jump
                </List.Item>
                <List.Item>
                  <b>Computer, tablet, mobile only</b>: only show the elements
                  on specific devices.
                </List.Item>
                <List.Item>
                  <b>Fluid</b>: make the elements take all the possible space
                  horizontally
                </List.Item>
                <List.Item>
                  <b>Unstackable</b>: never stack the elements even on small
                  screens
                </List.Item>
              </List>
              <Divider section />
              <Header size="huge" as="h2">
                What changes
              </Header>
              <p>
                Note that we have set the container's width to 970px and
                max-width to none on this page, so on small screens or narrower
                browser viewport, some contents will be compressed together and
                not be visible.
              </p>
              <Header size="huge" as="h2">
                Browsers, scrolling, and fixed elements
              </Header>
              <p>
                Non-responsive layouts highlight a key drawback to fixed
                elements. Any fixed component, such as a fixed navbar, will not
                be scrollable when the viewport becomes narrower than the page
                content. In other words, given the non-responsive container
                width of 970px and a viewport of 800px, you'll potentially hide
                170px of content.
              </p>
              <p>
                There is no way around this as it's default browser behavior.
                The only solution is a responsive layout or using a non-fixed
                element.
              </p>
              <Header size="huge" as="h2">
                Non-responsive grid system
              </Header>
              <Grid columns="3">
                <Grid.Column>
                  <p>One third</p>
                </Grid.Column>
                <Grid.Column>
                  <p>One third</p>
                </Grid.Column>
                <Grid.Column>
                  <p>One third</p>
                </Grid.Column>
              </Grid>
            </Segment>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
