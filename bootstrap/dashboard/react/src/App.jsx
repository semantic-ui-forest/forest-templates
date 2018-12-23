import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Image,
  Label,
  Menu,
  Table
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
          <Menu borderless inverted fluid fixed="top">
            <Menu.Item header as="a">
              Project name
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Input placeholder="Search..." size="small" />
              </Menu.Item>
              <Menu.Item as="a">Dashboard</Menu.Item>
              <Menu.Item as="a">Settings</Menu.Item>
              <Menu.Item as="a">Profile</Menu.Item>
              <Menu.Item as="a">Help</Menu.Item>
            </Menu.Menu>
          </Menu>
        </Grid>
        <Grid padded className="mobile only">
          <Menu borderless inverted fluid fixed="top">
            <Menu.Item header as="a">
              Project Name
            </Menu.Item>
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
              <Menu.Item as="a">Dashboard</Menu.Item>
              <Menu.Item as="a">Settings</Menu.Item>
              <Menu.Item as="a">Profile</Menu.Item>
              <Menu.Item as="a">Help</Menu.Item>
              <Divider fitted />
              <Menu.Item>
                <Input placeholder="Search..." size="small" />
              </Menu.Item>
            </Menu>
          </Menu>
        </Grid>
        <Grid padded>
          <Grid.Column
            tablet={3}
            computer={3}
            only="tablet computer"
            id="sidebar"
          >
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
          <Grid.Column
            mobile={16}
            tablet={13}
            computer={13}
            floated="right"
            id="content"
          >
            <Grid padded>
              <Grid.Row>
                <Header dividing size="huge" as="h1">
                  Dashboard
                </Header>
              </Grid.Row>
              <Grid.Row textAlign="center">
                <Grid.Column mobile={8} tablet={4} computer={4}>
                  <Image
                    centered
                    circular
                    size="small"
                    src="/static/images/wireframe/square-image.png"
                  />
                  <Label basic size="large">
                    Label
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column mobile={8} tablet={4} computer={4}>
                  <Image
                    centered
                    circular
                    size="small"
                    src="/static/images/wireframe/square-image.png"
                  />
                  <Label basic size="large">
                    Label
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column mobile={8} tablet={4} computer={4}>
                  <Image
                    centered
                    circular
                    size="small"
                    src="/static/images/wireframe/square-image.png"
                  />
                  <Label basic size="large">
                    Label
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column mobile={8} tablet={4} computer={4}>
                  <Image
                    centered
                    circular
                    size="small"
                    src="/static/images/wireframe/square-image.png"
                  />
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
                <Table singleLine striped selectable unstackable>
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
