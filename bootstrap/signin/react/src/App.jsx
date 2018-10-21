import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Checkbox,
  Container,
  Form,
  Grid,
  Header
} from "semantic-ui-react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid textAlign="center">
          <Container>
            <Header size="huge">Please sign in</Header>
            <Form size="large">
              <Form.Input
                name="email"
                placeholder="Email address"
                type="text"
              />
              <Form.Input
                name="password"
                placeholder="Password"
                type="password"
              />
              <Form.Field>
                <Checkbox label="Remember me" />
              </Form.Field>
              <Button primary fluid submit size="large">
                Sign in
              </Button>
            </Form>
          </Container>
        </Grid>
      </div>
    );
  }
}

export default App;
