import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Divider,
  Grid,
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
          <Menu borderless size="massive">
            <Menu.Item header>Project Name</Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item active>Home</Menu.Item>
              <Menu.Item>About</Menu.Item>
              <Menu.Item>Contact</Menu.Item>
            </Menu.Menu>
          </Menu>
          <Message>
            <Grid textAlign="center">
              <Header size="huge" as="h1">
                Jumbotron heading
              </Header>
              <p className="lead">
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
              <Button size="massive" color="green">
                Sign up today
              </Button>
            </Grid>
          </Message>
          <Grid stackable padded columns="two">
            <Grid.Column>
              <Header as="h2">Subheading</Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Maecenas
                faucibus mollis interdum.
              </p>
              <Header as="h2">Subheading</Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Maecenas
                faucibus mollis interdum.
              </p>
              <Header as="h2">Subheading</Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Maecenas
                faucibus mollis interdum.
              </p>
            </Grid.Column>
            <Grid.Column>
              <Header as="h2">Subheading</Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Maecenas
                faucibus mollis interdum.
              </p>
              <Header as="h2">Subheading</Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Maecenas
                faucibus mollis interdum.
              </p>
              <Header as="h2">Subheading</Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Maecenas
                faucibus mollis interdum.
              </p>
            </Grid.Column>
          </Grid>
          <Divider hidden />
          <Divider hidden />
          <Divider />
          <footer>&copy; 2017 Company, Inc.</footer>
        </Container>
      </div>
    );
  }
}

export default App;
