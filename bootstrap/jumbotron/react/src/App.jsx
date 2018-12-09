import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Menu,
  Message
} from "semantic-ui-react";

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
          <Menu inverted borderless fluid fixed="top">
            <Container>
              <Menu.Item header>Project Name</Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item>
                  <Form>
                    <Form.Group inline>
                      <Form.Input
                        placeholder="Email"
                        type="text"
                      />
                      <Form.Input
                        placeholder="Password"
                        type="password"
                      />
                      <Form.Button content="Sign in" color="green" />
                    </Form.Group>
                  </Form>
                </Menu.Item>
              </Menu.Menu>
            </Container>
          </Menu>
        </Grid>
        <Grid padded className="mobile only">
          <Menu borderless fluid inverted fixed="top" size="huge">
            <Menu.Item header>Project Name</Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  basic
                  inverted
                  icon
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
              <Menu.Item>
                <Form>
                  <Form.Input placeholder="Email" type="text" />
                  <Form.Input
                    placeholder="Password"
                    type="password"
                  />
                  <Form.Button content="Sign in" color="green" />
                </Form>
              </Menu.Item>
            </Menu>
          </Menu>
        </Grid>
        <Message size="massive">
          <Container>
            <Header size="huge" as="h1">
              Hello, world!
            </Header>
            <p>
              This is a template for a simple marketing or informational
              website. It includes a large callout called a jumbotron and three
              supporting pieces of content. Use it as a starting point to create
              something more unique.
            </p>
            <Button size="large" primary>
              Learn more &raquo;
            </Button>
          </Container>
        </Message>
        <Container>
          <Grid stackable columns="three">
            <Grid.Column>
              <Header as="h1">Heading</Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <Button basic size="small">
                View details &raquo;
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Header as="h1">Heading</Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <Button basic size="small">
                View details &raquo;
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Header as="h1">Heading</Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <Button basic size="small">
                View details &raquo;
              </Button>
            </Grid.Column>
          </Grid>
          <Divider hidden />
          <Divider />
          <footer>&copy; 2017 Company, Inc.</footer>
        </Container>
      </div>
    );
  }
}

export default App;
