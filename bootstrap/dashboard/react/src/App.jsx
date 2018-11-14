import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Divider,
  Grid,
  Header,
  Input,
  Image,
  Label,
  Menu,
  Table
} from "semantic-ui-react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu borderless inverted fluid fixed="top" size="huge">
          <Menu.Item header as="a">Project name</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item as="a">
              <Input placeholder="Search..." size="small" />
            </Menu.Item>
            <Menu.Item as="a">Dashboard</Menu.Item>
            <Menu.Item as="a">Settings</Menu.Item>
            <Menu.Item as="a">Profile</Menu.Item>
            <Menu.Item as="a">Help</Menu.Item>
          </Menu.Menu>
        </Menu>
        <Grid padded>
          <Grid.Column width={3} id="sidebar">
            <Menu vertical borderless fluid text>
              <Menu.Item active as="a">
                Overview
              </Menu.Item>
              <Menu.Item as="a">Reports</Menu.Item>
              <Menu.Item as="a">Analytics</Menu.Item>
              <Menu.Item as="a">Export</Menu.Item>
              <Divider hidden />
              <Menu.Item as="a">Nav item</Menu.Item>
              <Menu.Item as="a">Nav item again</Menu.Item>
              <Menu.Item as="a">One more nav</Menu.Item>
              <Menu.Item as="a">Another nav item</Menu.Item>
              <Menu.Item as="a">More navigation</Menu.Item>
              <Divider hidden />
              <Menu.Item as="a">Macintoch</Menu.Item>
              <Menu.Item as="a">Linux</Menu.Item>
              <Menu.Item as="a">Windows</Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column width={13} id="content">
            <Grid padded>
              <Grid.Row>
                <Header dividing size="huge" as="h1">
                  Dashboard
                </Header>
              </Grid.Row>
              <Grid.Row columns={4} textAlign="center">
                <Grid.Column>
                  <Image
                    centered
                    circular
                    size="small"
                    src="/static/images/wireframe/square-image.png"
                  />
                  <Divider hidden />
                  <Label basic size="large">
                    Label
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column>
                  <Image
                    centered
                    circular
                    size="small"
                    src="/static/images/wireframe/square-image.png"
                  />
                  <Divider hidden />
                  <Label basic size="large">
                    Label
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column>
                  <Image
                    centered
                    circular
                    size="small"
                    src="/static/images/wireframe/square-image.png"
                  />
                  <Divider hidden />
                  <Label basic size="large">
                    Label
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column>
                  <Image
                    centered
                    circular
                    size="small"
                    src="/static/images/wireframe/square-image.png"
                  />
                  <Divider hidden />
                  <Label basic size="large">
                    Label
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
              </Grid.Row>
              <Divider section hidden />
              <Grid.Row>
                <Header dividing size="huge" as="h1">
                  Section title
                </Header>
              </Grid.Row>
              <Grid.Row>
                <Table basic="very" singleLine striped selectable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>#</Table.HeaderCell>
                      <Table.HeaderCell>Header</Table.HeaderCell>
                      <Table.HeaderCell>Header</Table.HeaderCell>
                      <Table.HeaderCell>Header</Table.HeaderCell>
                      <Table.HeaderCell>Header</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>1.001</Table.Cell>
                      <Table.Cell>Lorem</Table.Cell>
                      <Table.Cell>ipsum</Table.Cell>
                      <Table.Cell>dolor</Table.Cell>
                      <Table.Cell>sit</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>1,002</Table.Cell>
                      <Table.Cell>amet</Table.Cell>
                      <Table.Cell>consectetur</Table.Cell>
                      <Table.Cell>adipiscing</Table.Cell>
                      <Table.Cell>elit</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>1,003</Table.Cell>
                      <Table.Cell>Integer</Table.Cell>
                      <Table.Cell>nec</Table.Cell>
                      <Table.Cell>odio</Table.Cell>
                      <Table.Cell>Praesent</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>1,003</Table.Cell>
                      <Table.Cell>libero</Table.Cell>
                      <Table.Cell>Sed</Table.Cell>
                      <Table.Cell>cursus</Table.Cell>
                      <Table.Cell>ante</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>1,004</Table.Cell>
                      <Table.Cell>dapibus</Table.Cell>
                      <Table.Cell>diam</Table.Cell>
                      <Table.Cell>Sed</Table.Cell>
                      <Table.Cell>nisi</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>1,005</Table.Cell>
                      <Table.Cell>Nulla</Table.Cell>
                      <Table.Cell>quis</Table.Cell>
                      <Table.Cell>sem</Table.Cell>
                      <Table.Cell>at</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>1,006</Table.Cell>
                      <Table.Cell>nibh</Table.Cell>
                      <Table.Cell>elementum</Table.Cell>
                      <Table.Cell>imperdiet</Table.Cell>
                      <Table.Cell>Duis</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>1,007</Table.Cell>
                      <Table.Cell>sagittis</Table.Cell>
                      <Table.Cell>ipsum</Table.Cell>
                      <Table.Cell>Praesent</Table.Cell>
                      <Table.Cell>mauris</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>1,008</Table.Cell>
                      <Table.Cell>Fusce</Table.Cell>
                      <Table.Cell>nec</Table.Cell>
                      <Table.Cell>tellus</Table.Cell>
                      <Table.Cell>sed</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>1,009</Table.Cell>
                      <Table.Cell>augue</Table.Cell>
                      <Table.Cell>semper</Table.Cell>
                      <Table.Cell>porta</Table.Cell>
                      <Table.Cell>Mauris</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>1,010</Table.Cell>
                      <Table.Cell>massa</Table.Cell>
                      <Table.Cell>Vestibulum</Table.Cell>
                      <Table.Cell>lacinia</Table.Cell>
                      <Table.Cell>arcu</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>1,011</Table.Cell>
                      <Table.Cell>eget</Table.Cell>
                      <Table.Cell>nulla</Table.Cell>
                      <Table.Cell>Class</Table.Cell>
                      <Table.Cell>aptent</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>1,012</Table.Cell>
                      <Table.Cell>taciti</Table.Cell>
                      <Table.Cell>sociosqu</Table.Cell>
                      <Table.Cell>ad</Table.Cell>
                      <Table.Cell>litora</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>1,013</Table.Cell>
                      <Table.Cell>torquent</Table.Cell>
                      <Table.Cell>per</Table.Cell>
                      <Table.Cell>conubia</Table.Cell>
                      <Table.Cell>nostra</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>1,014</Table.Cell>
                      <Table.Cell>per</Table.Cell>
                      <Table.Cell>inceptos</Table.Cell>
                      <Table.Cell>himenaeos</Table.Cell>
                      <Table.Cell>Curabitur</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>1,015</Table.Cell>
                      <Table.Cell>sodales</Table.Cell>
                      <Table.Cell>ligula</Table.Cell>
                      <Table.Cell>in</Table.Cell>
                      <Table.Cell>libero</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
