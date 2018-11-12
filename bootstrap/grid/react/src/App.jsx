import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Container,
  Divider,
  Grid,
  Header,
} from "semantic-ui-react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header as="h1">Semantic-UI grid examples</Header>
          <p className="header">
            Basic grid layouts to get you familiar with building within the
            Semantic-UI grid system.
          </p>
          <Divider section />
          <Header as="h2">Three equal columns</Header>
          <p>
            Get three equal-width columns starting at desktops and scaling to
            large desktops. On mobile devices, tablets and below, the columns
            will automatically stack. If you want it to shrink rather than
            stack, you can remove the "stackable" class.
          </p>
          <Grid stackable columns={3}>
            <Grid.Column>
              <p>.column</p>
            </Grid.Column>
            <Grid.Column>
              <p>.column</p>
            </Grid.Column>
            <Grid.Column>
              <p>.column</p>
            </Grid.Column>
          </Grid>
          <Divider hidden />
          <Header as="h2">Three unequal columns</Header>
          <p>
            Get three columns starting at desktops and scaling to large desktops
            of various widths. Remember, grid columns should add up to sixteen
            for a single horizontal block. More than that, and columns start
            stacking no matter the viewport.
          </p>
          <Grid stackable>
            <Grid.Column width={4}>
              <p>.four.wide.column</p>
            </Grid.Column>
            <Grid.Column width={8}>
              <p>.eight.wide.column</p>
            </Grid.Column>
            <Grid.Column width={4}>
              <p>.four.wide.column</p>
            </Grid.Column>
          </Grid>
          <Divider hidden />
          <Header as="h2">Two columns</Header>
          <p>
            Get two columns starting at desktops and scaling to large desktops.
          </p>
          <Grid stackable>
            <Grid.Column width={10}>
              <p>.ten.wide.column</p>
            </Grid.Column>
            <Grid.Column width={6}>
              <p>.six.wide.column</p>
            </Grid.Column>
          </Grid>
          <Divider hidden />
          <Header as="h2">Full width, single column</Header>
          <p>No grid classes are necessary for full-width elements.</p>
          <Divider section />
          <Header as="h2">Two columns with two nested columns</Header>
          <p>
            Per the documentation, nesting is easy—just put a row of columns
            within an existing column. This gives you two columns starting at
            desktops and scaling to large desktops, with another two (equal
            widths) within the larger column. At mobile device sizes, tablets
            and down, these columns and their nested columns will stack.
          </p>
          <Grid stackable>
            <Grid.Column width={10}>
              <p>.ten.wide.column</p>
              <Grid stackable>
                <Grid.Column width={8}>
                  <p>.eight.wide.column</p>
                </Grid.Column>
                <Grid.Column width={8}>
                  <p>.eight.wide.column</p>
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column width={6}>
              <p>.six.wide.column</p>
            </Grid.Column>
          </Grid>
          <Divider section />
          <Header as="h2">Mixed: mobile and desktop</Header>
          <p>
            The Semantic grid system has three tiers of classes: mobile
            (phones), tablet (tablets), computer (desktops and larger desktops).
            You can use nearly any combination of these classes to create more
            dynamic and flexible layouts.
          </p>
          <p>
            Here, you would see the computer, tablet, mobile only columns appear
            and disappear when you change the browser's viewport width.
          </p>
          <Grid stackable>
            <Grid.Column only="computer" width={10}>
              <p>.ten.wide.computer.only.column</p>
            </Grid.Column>
            <Grid.Column only="computer" width={6}>
              <p>.six.wide.computer.only.column</p>
            </Grid.Column>
          </Grid>
          <Grid stackable columns={3}>
            <Grid.Column only="computer">
              <p>.computer.only.column</p>
            </Grid.Column>
            <Grid.Column only="computer">
              <p>.computer.only.column</p>
            </Grid.Column>
            <Grid.Column only="computer">
              <p>.computer.only.column</p>
            </Grid.Column>
          </Grid>
          <Grid stackable columns={2}>
            <Grid.Column>
              <p>.column</p>
            </Grid.Column>
            <Grid.Column>
              <p>.column</p>
            </Grid.Column>
          </Grid>
          <Divider section />
          <Header as="h2">Mixed: mobile, tablet and desktop</Header>
          <Grid stackable>
            <Grid.Column width={10} only="computer">
              <p>.ten.wide.computer.only.column</p>
            </Grid.Column>
            <Grid.Column width={6} only="computer">
              <p>.six.wide.computer.only.column</p>
            </Grid.Column>
          </Grid>
          <Grid stackable>
            <Grid.Column width={10} only="tablet">
              <p>.ten.wide.tablet.only.column</p>
            </Grid.Column>
            <Grid.Column width={6} only="tablet">
              <p>.six.wide.tablet.only.column</p>
            </Grid.Column>
          </Grid>
          <Grid stackable>
            <Grid.Column only="mobile">
              <p>.mobile.only.column</p>
            </Grid.Column>
          </Grid>
          <Grid stackable>
            <Grid.Column width={10} only="mobile">
              <p>.ten.wide.mobile.only.column</p>
            </Grid.Column>
          </Grid>
          <Grid stackable columns={3}>
            <Grid.Column only="computer tablet">
              <p>.computer.tablet.only.column</p>
            </Grid.Column>
            <Grid.Column only="computer tablet">
              <p>.computer.tablet.only.column</p>
            </Grid.Column>
            <Grid.Column only="computer tablet">
              <p>.computer.tablet.only.column</p>
            </Grid.Column>
          </Grid>
          <Divider section />
          <Header as="h2">Column clearning</Header>
          <p>
            Grid will automatically clear previous columns, which presents clear
            floats with uneven content.
          </p>
          <Grid stackable>
            <Grid.Column width={4} floated="left">
              <p>.four.wide.left.floated.column</p>
            </Grid.Column>
            <Grid.Column width={5} centered>
              <p>.five.wide.left.floated.column</p>
            </Grid.Column>
            <Grid.Column width={6} floated="right">
              <p>.six.wide.right.floated.column</p>
            </Grid.Column>
          </Grid>
          <Grid stackable columns={4}>
            <Grid.Column floated="left">
              <p>.left.floated.column</p>
            </Grid.Column>
            <Grid.Column floated="right">
              <p>.right.floated.column</p>
            </Grid.Column>
          </Grid>
          <Divider section />
          <Header as="h2">Reversed and doubling</Header>
          <p>
            Reversed grid allows you to reverse the order of columns according
            to devices.
          </p>
          <p>Doubling grid will double columns' width for each device jump.</p>
          <p>Change the width of browser to see the responsive effects.</p>
          <Grid reversed="mobile" columns={3}>
            <Grid.Column>
              <p>Left</p>
            </Grid.Column>
            <Grid.Column>
              <p>Middle</p>
            </Grid.Column>
            <Grid.Column>
              <p>Right</p>
            </Grid.Column>
          </Grid>
          <Grid doubling stackable columns={3}>
            <Grid.Column>
              <p>.column</p>
            </Grid.Column>
            <Grid.Column>
              <p>.column</p>
            </Grid.Column>
            <Grid.Column>
              <p>.column</p>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
