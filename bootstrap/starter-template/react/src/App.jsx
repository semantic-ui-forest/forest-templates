import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Container,
  Header,
  Menu,
} from "semantic-ui-react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu inverted borderless size="huge">
          <Container>
            <Menu.Item header as="a" href="#root">Project Name</Menu.Item>
            <Menu.Item active as="a" href="#root">Home</Menu.Item>
            <Menu.Item as="a" href="#root">About</Menu.Item>
            <Menu.Item as="a" href="#root">Contact</Menu.Item>
          </Container>
        </Menu>
        <Container text textAlign="center">
          <Header size="huge">
            Semantic-UI starter template
          </Header>
          <p className="lead">
            Use this document as a way to quickly start any new project.
            <br />
            All you get is this text and a mostly barebones HTML document.
          </p>
        </Container>
      </div>
    );
  }
}

export default App;
