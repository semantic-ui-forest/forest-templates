import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import { Button, Container, Grid, Header, Icon, Menu } from "semantic-ui-react";

import "./App.css";

class App extends Component {
  state = {
    dropdownMenuStyle: {
      display: "none"
    }
  };

  handleToggleDropdownMenu = () => {
    let newState = Object.assign({}, this.state);
    if (newState.dropdownMenuStyle.display === "none") {
      newState.dropdownMenuStyle = { display: "flex" };
    } else {
      newState.dropdownMenuStyle = { display: "none" };
    }

    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <Grid padded className="tablet computer only">
          <Menu borderless fluid inverted size="huge">
            <Container>
              <Menu.Item header as="a" href="#root">
                Project Name
              </Menu.Item>
              <Menu.Item active as="a" href="#root">
                Home
              </Menu.Item>
              <Menu.Item as="a" href="#root">
                About
              </Menu.Item>
              <Menu.Item as="a" href="#root">
                Contact
              </Menu.Item>
            </Container>
          </Menu>
        </Grid>
        <Grid padded className="mobile only">
          <Menu borderless fluid inverted size="huge">
            <Menu.Item header as="a" href="#root">
              Project Name
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  icon
                  inverted
                  basic
                  toggle
                  onClick={this.handleToggleDropdownMenu}
                >
                  <Icon name="content" />
                </Button>
              </Menu.Item>
            </Menu.Menu>
            <Menu
              borderless
              fluid
              inverted
              vertical
              style={this.state.dropdownMenuStyle}
            >
              <Menu.Item active as="a" href="#root">
                Home
              </Menu.Item>
              <Menu.Item as="a" href="#root">
                About
              </Menu.Item>
              <Menu.Item as="a" href="#root">
                Contact
              </Menu.Item>
            </Menu>
          </Menu>
        </Grid>
        <Container text textAlign="center">
          <Header size="huge">Semantic-UI starter template</Header>
          <p className="lead">
            Use this document as a way to quickly start any new project.
          </p>
          <p className="lead">
            All you get is this text and a mostly barebones HTML document.
          </p>
        </Container>
      </div>
    );
  }
}

export default App;
