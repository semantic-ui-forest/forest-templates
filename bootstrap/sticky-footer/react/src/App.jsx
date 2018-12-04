import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import { Container, Header } from "semantic-ui-react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header dividing as="h1" size="huge">
            Sticky footer
          </Header>
          <p className="lead">
            Pin a fixed-height footer to the bottom of the viewport in desktop
            browsers with this custom HTML and CSS.
          </p>
        </Container>
        <footer>
          <Container>
            <p>Place sticky footer content here.</p>
          </Container>
        </footer>
      </div>
    );
  }
}

export default App;
