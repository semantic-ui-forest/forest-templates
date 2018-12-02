import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Divider,
  Form,
  Grid,
  Header,
  Menu,
  Message,
} from "semantic-ui-react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu inverted borderless fixed="top">
          <Container>
            <Menu.Item header>Project Name</Menu.Item>
            <Menu.Menu position="right">
              <Form>
                <Form.Group inline>
                  <Form.Field>
                    <Form.Input placeholder="Email" type="text" as="input" />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input
                      placeholder="Password"
                      type="password"
                      as="input"
                    />
                  </Form.Field>
                  <Form.Button content="Sign in" color="green" />
                </Form.Group>
              </Form>
            </Menu.Menu>
          </Container>
        </Menu>
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
              <Header as="h1">
                Heading
              </Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
              </p>
              <Button basic size="small">
                View details &raquo;
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Header as="h1">
                Heading
              </Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
              </p>
              <Button basic size="small">
                View details &raquo;
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Header as="h1">
                Heading
              </Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
              </p>
              <Button basic size="small">
                View details &raquo;
              </Button>
            </Grid.Column>
          </Grid>
          <Divider hidden />
          <Divider />
          <footer>
            &copy; 2017 Company, Inc.
          </footer>
        </Container>
      </div>
    );
  }
}

export default App;
