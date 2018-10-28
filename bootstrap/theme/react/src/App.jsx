import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  Label,
  Menu,
  Message,
  Segment,
  Table,
  Progress
} from "semantic-ui-react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu borderless inverted fixed="top" size="huge">
          <Container>
            <Menu.Item header as="a" href="#root">
              Semantic-UI theme
            </Menu.Item>
            <Menu.Item active as="a" href="#root">
              Home
            </Menu.Item>
            <Menu.Item as="a" href="#root">About</Menu.Item>
            <Menu.Item as="a" href="#root">Contact</Menu.Item>
            <Dropdown item text="Dropdown">
              <Dropdown.Menu>
                <Dropdown.Item as="a" href="#root">
                  Action
                </Dropdown.Item>
                <Dropdown.Item as="a" href="#root">
                  Another Action
                </Dropdown.Item>
                <Dropdown.Item as="a" href="#root">
                  Something else here
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as="a" href="#root">
                  Separated link
                </Dropdown.Item>
                <Dropdown.Item as="a" href="#root">
                  One more separated link
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
        <div id="content">
          <Container>
            <Message className="jumbotron">
              <Header size="massive">Theme example</Header>
              <p>
                This is a template showcasing the optional theme stylesheet
                included in Semantic-UI. Use it as a starting point to create
                something more unique by building on or modifying it.
              </p>
            </Message>

            <Header dividing as="h1">
              Buttons
            </Header>
            <p>
              <Button size="large">Default</Button>
              <Button size="large" primary>
                Primary
              </Button>
              <Button size="large" color="green">
                Success
              </Button>
              <Button size="large" color="teal">
                Teal
              </Button>
              <Button size="large" color="orange">
                Warning
              </Button>
              <Button size="large" color="red">
                Danger
              </Button>
              <Button size="large" basic>
                Link
              </Button>
            </p>
            <p>
              <Button size="medium">Default</Button>
              <Button size="medium" primary>
                Primary
              </Button>
              <Button size="medium" color="green">
                Success
              </Button>
              <Button size="medium" color="teal">
                Teal
              </Button>
              <Button size="medium" color="orange">
                Warning
              </Button>
              <Button size="medium" color="red">
                Danger
              </Button>
              <Button size="medium" basic>
                Link
              </Button>
            </p>
            <p>
              <Button size="small">Default</Button>
              <Button size="small" primary>
                Primary
              </Button>
              <Button size="small" color="green">
                Success
              </Button>
              <Button size="small" color="teal">
                Teal
              </Button>
              <Button size="small" color="orange">
                Warning
              </Button>
              <Button size="small" color="red">
                Danger
              </Button>
              <Button size="small" basic>
                Link
              </Button>
            </p>
            <p>
              <Button size="mini">Default</Button>
              <Button size="mini" primary>
                Primary
              </Button>
              <Button size="mini" color="green">
                Success
              </Button>
              <Button size="mini" color="teal">
                Teal
              </Button>
              <Button size="mini" color="orange">
                Warning
              </Button>
              <Button size="mini" color="red">
                Danger
              </Button>
              <Button size="mini" basic>
                Link
              </Button>
            </p>

            <Header dividing as="h1">
              Tables
            </Header>
            <Grid stackable>
              <Grid.Column width={8}>
                <Table basic="very">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>#</Table.HeaderCell>
                      <Table.HeaderCell>First Name</Table.HeaderCell>
                      <Table.HeaderCell>Last Name</Table.HeaderCell>
                      <Table.HeaderCell>Username</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>1</Table.Cell>
                      <Table.Cell>Mark</Table.Cell>
                      <Table.Cell>Otto</Table.Cell>
                      <Table.Cell>@mdo</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>2</Table.Cell>
                      <Table.Cell>Jacob</Table.Cell>
                      <Table.Cell>Tdornton</Table.Cell>
                      <Table.Cell>@fat</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>3</Table.Cell>
                      <Table.Cell>Larry</Table.Cell>
                      <Table.Cell>tde Bird</Table.Cell>
                      <Table.Cell>@twitter</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
              <Grid.Column width={8}>
                <Table basic="very" striped>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>#</Table.HeaderCell>
                      <Table.HeaderCell>First Name</Table.HeaderCell>
                      <Table.HeaderCell>Last Name</Table.HeaderCell>
                      <Table.HeaderCell>Username</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>1</Table.Cell>
                      <Table.Cell>Mark</Table.Cell>
                      <Table.Cell>Otto</Table.Cell>
                      <Table.Cell>@mdo</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>2</Table.Cell>
                      <Table.Cell>Jacob</Table.Cell>
                      <Table.Cell>Tdornton</Table.Cell>
                      <Table.Cell>@fat</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>3</Table.Cell>
                      <Table.Cell>Larry</Table.Cell>
                      <Table.Cell>tde Bird</Table.Cell>
                      <Table.Cell>@twitter</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
              <Grid.Column width={8}>
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>#</Table.HeaderCell>
                      <Table.HeaderCell>First Name</Table.HeaderCell>
                      <Table.HeaderCell>Last Name</Table.HeaderCell>
                      <Table.HeaderCell>Username</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell rowspan="2">1</Table.Cell>
                      <Table.Cell>Mark</Table.Cell>
                      <Table.Cell>Otto</Table.Cell>
                      <Table.Cell>@mdo</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Mark</Table.Cell>
                      <Table.Cell>Otto</Table.Cell>
                      <Table.Cell>@mdo</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>2</Table.Cell>
                      <Table.Cell>Jacob</Table.Cell>
                      <Table.Cell>Tdornton</Table.Cell>
                      <Table.Cell>@fat</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>3</Table.Cell>
                      <Table.Cell colspan="2">Larry tde Bird</Table.Cell>
                      <Table.Cell>@twitter</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
              <Grid.Column width={8}>
                <Table basic="very">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>#</Table.HeaderCell>
                      <Table.HeaderCell>First Name</Table.HeaderCell>
                      <Table.HeaderCell>Last Name</Table.HeaderCell>
                      <Table.HeaderCell>Username</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>1</Table.Cell>
                      <Table.Cell>Mark</Table.Cell>
                      <Table.Cell>Otto</Table.Cell>
                      <Table.Cell>@mdo</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>2</Table.Cell>
                      <Table.Cell>Jacob</Table.Cell>
                      <Table.Cell>Tdornton</Table.Cell>
                      <Table.Cell>@fat</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>3</Table.Cell>
                      <Table.Cell colspan="2">Larry tde Bird</Table.Cell>
                      <Table.Cell>@twitter</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
            </Grid>

            <Header dividing as="h1">
              Thumbnails
            </Header>
            <Image
              size="small"
              src="/static/images/wireframe/square-image.png"
            />

            <Header dividing as="h1">
              Labels
            </Header>
            <p>
              <Label size="massive">Default</Label>
              <Label size="massive" color="blue">
                Primary
              </Label>
              <Label size="massive" color="green">
                Success
              </Label>
              <Label size="massive" color="teal">
                Info
              </Label>
              <Label size="massive" color="orange">
                Warning
              </Label>
              <Label size="massive" color="red">
                Danger
              </Label>
            </p>
            <p>
              <Label size="huge">Default</Label>
              <Label size="huge" color="blue">
                Primary
              </Label>
              <Label size="huge" color="green">
                Success
              </Label>
              <Label size="huge" color="teal">
                Info
              </Label>
              <Label size="huge" color="orange">
                Warning
              </Label>
              <Label size="huge" color="red">
                Danger
              </Label>
            </p>
            <p>
              <Label size="big">Default</Label>
              <Label size="big" color="blue">
                Primary
              </Label>
              <Label size="big" color="green">
                Success
              </Label>
              <Label size="big" color="teal">
                Info
              </Label>
              <Label size="big" color="orange">
                Warning
              </Label>
              <Label size="big" color="red">
                Danger
              </Label>
            </p>
            <p>
              <Label size="large">Default</Label>
              <Label size="large" color="blue">
                Primary
              </Label>
              <Label size="large" color="green">
                Success
              </Label>
              <Label size="large" color="teal">
                Info
              </Label>
              <Label size="large" color="orange">
                Warning
              </Label>
              <Label size="large" color="red">
                Danger
              </Label>
            </p>
            <p>
              <Label size="medium">Default</Label>
              <Label size="medium" color="blue">
                Primary
              </Label>
              <Label size="medium" color="green">
                Success
              </Label>
              <Label size="medium" color="teal">
                Info
              </Label>
              <Label size="medium" color="orange">
                Warning
              </Label>
              <Label size="medium" color="red">
                Danger
              </Label>
            </p>
            <p>
              <Label size="small">Default</Label>
              <Label size="small" color="blue">
                Primary
              </Label>
              <Label size="small" color="green">
                Success
              </Label>
              <Label size="small" color="teal">
                Info
              </Label>
              <Label size="small" color="orange">
                Warning
              </Label>
              <Label size="small" color="red">
                Danger
              </Label>
            </p>
            <p>
              <Label size="tiny">Default</Label>
              <Label size="tiny" color="blue">
                Primary
              </Label>
              <Label size="tiny" color="green">
                Success
              </Label>
              <Label size="tiny" color="teal">
                Info
              </Label>
              <Label size="tiny" color="orange">
                Warning
              </Label>
              <Label size="tiny" color="red">
                Danger
              </Label>
            </p>
            <p>
              <Label size="mini">Default</Label>
              <Label size="mini" color="blue">
                Primary
              </Label>
              <Label size="mini" color="green">
                Success
              </Label>
              <Label size="mini" color="teal">
                Info
              </Label>
              <Label size="mini" color="orange">
                Warning
              </Label>
              <Label size="mini" color="red">
                Danger
              </Label>
            </p>

            <Header dividing as="h1">
              Badges
            </Header>
            <a className="item" href="#root">
              Inbox
              <Label circular size="small">
                42
              </Label>
            </a>
            <p />
            <Menu secondary compact>
              <Menu.Item as="a" href="#root">
                Home
                <Label size="small" circular>
                  42
                </Label>
              </Menu.Item>
              <Menu.Item as="a" href="#root">
                Profile
                <Label size="small" circular>
                  53
                </Label>
              </Menu.Item>
              <Menu.Item as="a" href="#root">
                Messages
                <Label size="small" circular>
                  3
                </Label>
              </Menu.Item>
            </Menu>

            <Header dividing as="h1">
              Dropdown menus
            </Header>
            <Menu vertical borderless>
              <Menu.Item active as="a">
                Action
              </Menu.Item>
              <Menu.Item as="a">Another action</Menu.Item>
              <Menu.Item as="a">Something else here</Menu.Item>
              <Divider fitted />
              <Menu.Item as="a" href="#root">
                Separated link
              </Menu.Item>
            </Menu>

            <Header dividing as="h1">
              Navs
            </Header>
            <Menu tabular>
              <Menu.Item as="a" active>
                Home
              </Menu.Item>
              <Menu.Item as="a">Profile</Menu.Item>
              <Menu.Item as="a">Message</Menu.Item>
            </Menu>
            <Menu secondary>
              <Menu.Item as="a" active>
                Home
              </Menu.Item>
              <Menu.Item as="a">Profile</Menu.Item>
              <Menu.Item as="a">Message</Menu.Item>
            </Menu>

            <Header dividing as="h1">
              Navbars
            </Header>
            <Menu borderless>
              <Menu.Item header href="#root">
                Project name
              </Menu.Item>
              <Menu.Item active href="#root">
                Home
              </Menu.Item>
              <Menu.Item href="#root">About</Menu.Item>
              <Menu.Item href="#root">Contact</Menu.Item>
              <Dropdown item text="Dropdown">
                <Dropdown.Menu>
                  <Dropdown.Item as="a" href="#root">
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item as="a" href="#root">
                    Another Action
                  </Dropdown.Item>
                  <Dropdown.Item as="a" href="#root">
                    Something else here
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Nav header</Dropdown.Header>
                  <Dropdown.Item as="a" href="#root">
                    Separated link
                  </Dropdown.Item>
                  <Dropdown.Item as="a" href="#root">
                    One more separated link
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
            <Menu inverted borderless>
              <Menu.Item header href="#root">
                Project name
              </Menu.Item>
              <Menu.Item active href="#root">
                Home
              </Menu.Item>
              <Menu.Item href="#root">About</Menu.Item>
              <Menu.Item href="#root">Contact</Menu.Item>
              <Dropdown item text="Dropdown">
                <Dropdown.Menu>
                  <Dropdown.Item as="a" href="#root">
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item as="a" href="#root">
                    Another Action
                  </Dropdown.Item>
                  <Dropdown.Item as="a" href="#root">
                    Something else here
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Nav header</Dropdown.Header>
                  <Dropdown.Item as="a" href="#root">
                    Separated link
                  </Dropdown.Item>
                  <Dropdown.Item as="a" href="#root">
                    One more separated link
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu>

            <Header dividing as="h1">
              Alerts
            </Header>
            <Message success>
              <Message.Content>
                <b>Well done!</b> You successfully read this important alert
                message.
              </Message.Content>
            </Message>
            <Message info>
              <Message.Content>
                <b>Heads up!</b> This alert needs your attention, but it's not
                super important.
              </Message.Content>
            </Message>
            <Message warning>
              <Message.Content>
                <b>Warning!</b> Best check yo self, you're not looking too good.
              </Message.Content>
            </Message>
            <Message error>
              <Message.Content>
                <b>Oh snap!</b> Change a few things up and try submitting again.
              </Message.Content>
            </Message>

            <Header dividing as="h1">
              Progress bars
            </Header>
            <Progress color="blue" percent="60" />
            <Progress color="green" percent="40" />
            <Progress color="teal" percent="20" />
            <Progress color="orange" percent="60" />
            <Progress color="red" percent="80" />

            <Header dividing as="h1">
              List groups
            </Header>
            <Grid stackable columns="3">
              <Grid.Column>
                <Menu vertical fluid>
                  <Menu.Item as="a">Cras justo odio</Menu.Item>
                  <Menu.Item as="a">Dapibus ac facilisis in</Menu.Item>
                  <Menu.Item as="a">Morbi leo risus</Menu.Item>
                  <Menu.Item as="a">Porta ac consectetur ac</Menu.Item>
                  <Menu.Item as="a">Vestibulum at eros</Menu.Item>
                </Menu>
              </Grid.Column>
              <Grid.Column>
                <Menu vertical fluid>
                  <Menu.Item as="a" active>
                    Cras justo odio
                  </Menu.Item>
                  <Menu.Item as="a">Dapibus ac facilisis in</Menu.Item>
                  <Menu.Item as="a">Morbi leo risus</Menu.Item>
                  <Menu.Item as="a">Porta ac consectetur ac</Menu.Item>
                  <Menu.Item as="a">Vestibulum at eros</Menu.Item>
                </Menu>
              </Grid.Column>
              <Grid.Column>
                <Menu vertical fluid>
                  <Menu.Item as="a" active>
                    <Header size="medium" as="h1">
                      List group item heading
                    </Header>
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </Menu.Item>
                  <Menu.Item as="a">
                    <Header size="medium" as="h1">
                      List group item heading
                    </Header>
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </Menu.Item>
                  <Menu.Item as="a">
                    <Header size="medium" as="h1">
                      List group item heading
                    </Header>
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </Menu.Item>
                </Menu>
              </Grid.Column>
            </Grid>

            <Header dividing as="h1">
              Panels
            </Header>
            <Grid stackable columns="3">
              <Grid.Column>
                <Message attached="top">Panel title</Message>
                <Segment attached="bottom">Panel content</Segment>
              </Grid.Column>
              <Grid.Column>
                <Message attached="top" success>
                  Panel title
                </Message>
                <Segment attached="bottom">Panel content</Segment>
              </Grid.Column>
              <Grid.Column>
                <Message attached="top" warning>
                  Panel title
                </Message>
                <Segment attached="bottom">Panel content</Segment>
              </Grid.Column>
              <Grid.Column>
                <Message attached="top" color="blue">
                  Panel title
                </Message>
                <Segment attached="bottom">Panel content</Segment>
              </Grid.Column>
              <Grid.Column>
                <Message attached="top" inverted>
                  Panel title
                </Message>
                <Segment attached="bottom">Panel content</Segment>
              </Grid.Column>
              <Grid.Column>
                <Message attached="top" error>
                  Panel title
                </Message>
                <Segment attached="bottom">Panel content</Segment>
              </Grid.Column>
            </Grid>

            <Header dividing as="h1">
              Wells
            </Header>
            <Segment secondary>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sed diam eget risus varius blandit sit amet non magna. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Cras mattis
              consectetur purus sit amet fermentum. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
              elit. Aenean lacinia bibendum nulla sed consectetur.
            </Segment>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
