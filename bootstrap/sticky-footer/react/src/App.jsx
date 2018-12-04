import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import { Container, Divider, Grid, Header, Segment } from "semantic-ui-react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container>
          <Grid.Column>
            <Header as="h1" size="huge">
              Sticky footer
            </Header>
            <Divider />
            <p className="lead">
              Pin a fixed-height footer to the bottom of the viewport in desktop
              browsers with this custom HTML and CSS.
            </p>
          </Grid.Column>
        </Grid>
        <Segment basic className="footer" as="footer">
          <Container>
            <p>Place sticky footer content here.</p>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default App;
