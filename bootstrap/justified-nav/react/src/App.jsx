import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Menu
} from "semantic-ui-react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid stackable container>
          <Grid.Row>
            <Header size="large" as="h3">
              Project name
            </Header>
            <Menu fluid stackable widths="six" size="huge">
              <Menu.Item active>Home</Menu.Item>
              <Menu.Item>Projects</Menu.Item>
              <Menu.Item>Services</Menu.Item>
              <Menu.Item>Downloads</Menu.Item>
              <Menu.Item>About</Menu.Item>
              <Menu.Item>Contact</Menu.Item>
            </Menu>
          </Grid.Row>
          <Divider hidden section />
          <Divider hidden section />
          <Grid.Row>
            <Container textAlign="center">
              <Header as="h1" size="huge">
                Marketing stuff!
              </Header>
              <p>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet.
              </p>
              <Button color="green" size="massive">
                Get started today
              </Button>
            </Container>
          </Grid.Row>
          <Divider hidden section />
          <Divider hidden section />
          <Grid.Row columns="three">
            <Grid.Column>
              <Header size="huge" as="h1">
                Heading
              </Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <Button size="small" primary>
                View details &raquo;
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Header size="huge" as="h1">
                Heading
              </Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <Button size="small" primary>
                View details &raquo;
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Header size="huge" as="h1">
                Heading
              </Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <Button size="small" primary>
                View details &raquo;
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Divider hidden section />
          <Grid.Row>
            <Grid.Column>
              <Divider />
              <footer>&copy; 2017 Company, Inc.</footer>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
