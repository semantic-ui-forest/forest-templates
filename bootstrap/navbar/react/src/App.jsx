import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Dropdown,
  Header,
  Menu,
  Message
} from "semantic-ui-react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Menu borderless fluid size="big">
            <Menu.Item header>Project Name</Menu.Item>
            <Menu.Item active>Home</Menu.Item>
            <Menu.Item>About</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
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
          </Menu>
          <Message>
            <Header size="huge" as="h1">
              Navbar example
            </Header>
            <p className="lead">
              This example is a quick exercise to illustrate how the default,
              static navbar and fixed to top navbar work. It includes the
              responsive CSS and HTML, so it also adapts to your viewport and
              device.
            </p>
            <Button primary size="big" as="a">
              View navbar docs &raquo;
            </Button>
          </Message>
        </Container>
      </div>
    );
  }
}

export default App;
