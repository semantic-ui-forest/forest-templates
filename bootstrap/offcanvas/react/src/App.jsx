import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Menu,
  Message,
  Sidebar
} from "semantic-ui-react";

import "./App.css";

class App extends Component {
  state = {
    dropdownMenuStyle: {
      display: "none"
    },
    sidebarVisible: false
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

  handleToggleNav = () => {
    let newState = Object.assign({}, this.state);
    newState.sidebarVisible = !newState.sidebarVisible;

    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <Grid className="tablet computer only">
          <Menu borderless inverted fixed="top" size="huge">
            <Container>
              <Menu.Item header as="a">
                Project Name
              </Menu.Item>
              <Menu.Item active as="a">
                Home
              </Menu.Item>
              <Menu.Item as="a">About</Menu.Item>
              <Menu.Item as="a">Contact</Menu.Item>
            </Container>
          </Menu>
          <Container>
            <Grid padded>
              <Grid.Column width={13}>
                <Message>
                  <Header size="huge" as="h1">
                    Hello, world!
                  </Header>
                  <p className="lead">
                    This is a simple example to show the off-canvas layout
                    pattern in Semantic-UI, click the green button to see
                    off-canvas left sidebar coming in and out of the page, and
                    try to change the viewport size to see right sidebar toggle
                    button. You could check out more wonderful effects here:{" "}
                    <a
                      target="_blank"
                      href="http://semantic-ui.com/modules/sidebar.html#/examples"
                    >
                      Semantic-UI/sidebar examples
                    </a>
                    .
                  </p>
                </Message>
                <Divider hidden />
                <Grid>
                  <Grid.Row columns={3}>
                    <Grid.Column>
                      <Header as="h1">Heading</Header>
                      <p>
                        Donec id elit non mi porta gravida at eget metus. Fusce
                        dapibus, tellus ac cursus commodo, tortor mauris
                        condimentum nibh, ut fermentum massa justo sit amet
                        risus. Etiam porta sem malesuada magna mollis euismod.
                        Donec sed odio dui.
                      </p>
                      <Button basic size="small">
                        View detailes &raquo;
                      </Button>
                    </Grid.Column>
                    <Grid.Column>
                      <Header as="h1">Heading</Header>
                      <p>
                        Donec id elit non mi porta gravida at eget metus. Fusce
                        dapibus, tellus ac cursus commodo, tortor mauris
                        condimentum nibh, ut fermentum massa justo sit amet
                        risus. Etiam porta sem malesuada magna mollis euismod.
                        Donec sed odio dui.
                      </p>
                      <Button basic size="small">
                        View detailes &raquo;
                      </Button>
                    </Grid.Column>
                    <Grid.Column>
                      <Header as="h1">Heading</Header>
                      <p>
                        Donec id elit non mi porta gravida at eget metus. Fusce
                        dapibus, tellus ac cursus commodo, tortor mauris
                        condimentum nibh, ut fermentum massa justo sit amet
                        risus. Etiam porta sem malesuada magna mollis euismod.
                        Donec sed odio dui.
                      </p>
                      <Button basic size="small">
                        View detailes &raquo;
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={3}>
                    <Grid.Column>
                      <Header as="h1">Heading</Header>
                      <p>
                        Donec id elit non mi porta gravida at eget metus. Fusce
                        dapibus, tellus ac cursus commodo, tortor mauris
                        condimentum nibh, ut fermentum massa justo sit amet
                        risus. Etiam porta sem malesuada magna mollis euismod.
                        Donec sed odio dui.
                      </p>
                      <Button basic size="small">
                        View detailes &raquo;
                      </Button>
                    </Grid.Column>
                    <Grid.Column>
                      <Header as="h1">Heading</Header>
                      <p>
                        Donec id elit non mi porta gravida at eget metus. Fusce
                        dapibus, tellus ac cursus commodo, tortor mauris
                        condimentum nibh, ut fermentum massa justo sit amet
                        risus. Etiam porta sem malesuada magna mollis euismod.
                        Donec sed odio dui.
                      </p>
                      <Button basic size="small">
                        View detailes &raquo;
                      </Button>
                    </Grid.Column>
                    <Grid.Column>
                      <Header as="h1">Heading</Header>
                      <p>
                        Donec id elit non mi porta gravida at eget metus. Fusce
                        dapibus, tellus ac cursus commodo, tortor mauris
                        condimentum nibh, ut fermentum massa justo sit amet
                        risus. Etiam porta sem malesuada magna mollis euismod.
                        Donec sed odio dui.
                      </p>
                      <Button basic size="small">
                        View detailes &raquo;
                      </Button>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Divider hidden />
                <Divider />
                <footer>&copy; 2017 Company, Inc.</footer>
              </Grid.Column>
              <Grid.Column width={3}>
                <Menu vertical>
                  <Menu.Item active as="a">
                    Link
                  </Menu.Item>
                  <Menu.Item as="a">Link</Menu.Item>
                  <Menu.Item as="a">Link</Menu.Item>
                  <Menu.Item as="a">Link</Menu.Item>
                  <Menu.Item as="a">Link</Menu.Item>
                  <Menu.Item as="a">Link</Menu.Item>
                  <Menu.Item as="a">Link</Menu.Item>
                  <Menu.Item as="a">Link</Menu.Item>
                  <Menu.Item as="a">Link</Menu.Item>
                  <Menu.Item as="a">Link</Menu.Item>
                  <Menu.Item as="a">Link</Menu.Item>
                  <Menu.Item as="a">Link</Menu.Item>
                  <Menu.Item as="a">Link</Menu.Item>
                </Menu>
              </Grid.Column>
            </Grid>
          </Container>
        </Grid>
        <Grid className="mobile only">
          <Menu borderless inverted fixed="top" size="huge">
            <Menu.Item header as="a">
              Project Name
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  icon
                  toggle
                  basic
                  inverted
                  onClick={this.handleToggleDropdownMenu}
                >
                  <Icon name="content" />
                </Button>
              </Menu.Item>
            </Menu.Menu>
            <Menu
              vertical
              borderless
              fluid
              inverted
              style={this.state.dropdownMenuStyle}
            >
              <Menu.Item active as="a">
                Home
              </Menu.Item>
              <Menu.Item as="a">About</Menu.Item>
              <Menu.Item as="a">Contact</Menu.Item>
            </Menu>
          </Menu>
          <Container>
            <Sidebar.Pushable as={Grid} padded columns={1}>
              <Sidebar
                as={Menu}
                vertical
                direction="right"
                visible={this.state.sidebarVisible}
              >
                <Menu.Item active as="a">
                  Link
                </Menu.Item>
                <Menu.Item as="a">Link</Menu.Item>
                <Menu.Item as="a">Link</Menu.Item>
                <Menu.Item as="a">Link</Menu.Item>
                <Menu.Item as="a">Link</Menu.Item>
                <Menu.Item as="a">Link</Menu.Item>
                <Menu.Item as="a">Link</Menu.Item>
                <Menu.Item as="a">Link</Menu.Item>
                <Menu.Item as="a">Link</Menu.Item>
                <Menu.Item as="a">Link</Menu.Item>
                <Menu.Item as="a">Link</Menu.Item>
                <Menu.Item as="a">Link</Menu.Item>
                <Menu.Item as="a">Link</Menu.Item>
              </Sidebar>
              <Sidebar.Pusher as={Grid.Column}>
                <Message>
                  <Button
                    color="blue"
                    size="tiny"
                    className="top right attached"
                    onClick={this.handleToggleNav}
                  >
                    Toggle nav
                  </Button>
                  <Header size="huge" as="h1">
                    Hello, world!
                  </Header>
                  <p className="lead">
                    This is a simple example to show the off-canvas layout
                    pattern in Semantic-UI, click the green button to see
                    off-canvas left sidebar coming in and out of the page, and
                    try to change the viewport size to see right sidebar toggle
                    button. You could check out more wonderful effects here:{" "}
                    <a
                      target="_blank"
                      href="http://semantic-ui.com/modules/sidebar.html#/examples"
                    >
                      Semantic-UI/sidebar examples
                    </a>
                    .
                  </p>
                </Message>
                <Divider hidden />
                <Grid columns={2}>
                  <Grid.Column>
                    <Header as="h1">Heading</Header>
                    <p>
                      Donec id elit non mi porta gravida at eget metus. Fusce
                      dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Etiam porta sem malesuada magna mollis euismod. Donec sed
                      odio dui.
                    </p>
                    <Button basic size="small">
                      View detailes &raquo;
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Header as="h1">Heading</Header>
                    <p>
                      Donec id elit non mi porta gravida at eget metus. Fusce
                      dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Etiam porta sem malesuada magna mollis euismod. Donec sed
                      odio dui.
                    </p>
                    <Button basic size="small">
                      View detailes &raquo;
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Header as="h1">Heading</Header>
                    <p>
                      Donec id elit non mi porta gravida at eget metus. Fusce
                      dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Etiam porta sem malesuada magna mollis euismod. Donec sed
                      odio dui.
                    </p>
                    <Button basic size="small">
                      View detailes &raquo;
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Header as="h1">Heading</Header>
                    <p>
                      Donec id elit non mi porta gravida at eget metus. Fusce
                      dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Etiam porta sem malesuada magna mollis euismod. Donec sed
                      odio dui.
                    </p>
                    <Button basic size="small">
                      View detailes &raquo;
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Header as="h1">Heading</Header>
                    <p>
                      Donec id elit non mi porta gravida at eget metus. Fusce
                      dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Etiam porta sem malesuada magna mollis euismod. Donec sed
                      odio dui.
                    </p>
                    <Button basic size="small">
                      View detailes &raquo;
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Header as="h1">Heading</Header>
                    <p>
                      Donec id elit non mi porta gravida at eget metus. Fusce
                      dapibus, tellus ac cursus commodo, tortor mauris
                      condimentum nibh, ut fermentum massa justo sit amet risus.
                      Etiam porta sem malesuada magna mollis euismod. Donec sed
                      odio dui.
                    </p>
                    <Button basic size="small">
                      View detailes &raquo;
                    </Button>
                  </Grid.Column>
                </Grid>
                <Divider hidden />
                <Divider />
                <footer>&copy; 2017 Company, Inc.</footer>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </Container>
        </Grid>
      </div>
    );
  }
}

export default App;
