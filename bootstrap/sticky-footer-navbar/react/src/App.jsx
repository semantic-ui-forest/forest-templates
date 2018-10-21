import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Divider,
  Dropdown,
  Grid,
  Header,
  Menu,
  Segment
} from "semantic-ui-react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu borderless fixed="top" size="huge">
          <Grid container>
            <Grid.Row>
              <Menu.Item header as="a">
                Project Name
              </Menu.Item>
              <Menu.Item active>Home</Menu.Item>
              <Menu.Item>About</Menu.Item>
              <Menu.Item>Contact</Menu.Item>
              <Dropdown text="Dropdown" className="item">
                <Dropdown.Menu>
                  <Dropdown.Item>Action</Dropdown.Item>
                  <Dropdown.Item>Another action</Dropdown.Item>
                  <Dropdown.Item>Something else here</Dropdown.Item>
                  <Divider />
                  <Dropdown.Header>Navbar header</Dropdown.Header>
                  <Dropdown.Item>Seperated link</Dropdown.Item>
                  <Dropdown.Item>One more seperated link</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Grid.Row>
          </Grid>
        </Menu>
        <Grid container>
          <Grid.Column>
            <Header as="h1" size="huge">
              Sticky footer with fixed navbar
            </Header>
            <Divider />
            <p className="lead">
              Pin a fixed-height footer to the bottom of the viewport in desktop
              browsers with this custom HTML and CSS. A fixed navbar has been
              added with "ui fixed menu".
            </p>
          </Grid.Column>
        </Grid>
        <Segment basic className="footer">
          <Grid container>
            <Grid.Row>
              <p>Place sticky footer content here.</p>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default App;
