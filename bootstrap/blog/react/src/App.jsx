import React, { Component } from "react";

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  List,
  Menu,
  Segment
} from "semantic-ui-react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu borderless inverted pointing color="blue">
          <Container>
            <Menu.Item header active>
              Home
            </Menu.Item>
            <Menu.Item>New feature</Menu.Item>
            <Menu.Item>Press</Menu.Item>
            <Menu.Item>New hires</Menu.Item>
            <Menu.Item>About</Menu.Item>
          </Container>
        </Menu>
        <Grid container stackable>
          <Grid.Row>
            <Segment basic style={{paddingTop: "4rem"}}>
              <Header as="h1" size="huge" style={{fontSize: "54px"}}>
                <Header.Content>
                  The Semantic-UI Blog
                </Header.Content>
                <Header.Subheader>
                  A simple example of creating a blog with Semantic-UI.
                </Header.Subheader>
              </Header>
            </Segment>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={11} style={{fontSize: "18px"}}>
              <Header size="large" as="h2">
                <Header.Content>
                  Sample blog post
                </Header.Content>
                <Header.Subheader>
                  March 6, 2017 by <a href="#root">Jack</a>
                </Header.Subheader>
              </Header>
              <Divider hidden />
              <p>
                This blog post shows a few different types of content that's
                supported and styled with Semantic-UI. Basic typesetting, list,
                and code are all supported.
              </p>
              <div class="ui divider" />
              <p>
                Cum sociis natoque penatibus et magnis {" "}
                <a href="#root">dis parturient montes</a>, nascetur ridiculus mus.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                venenatis vestibulum. Sed posuere consectetur est at lobortis.
                Cras mattis consectetur purus sit amet fermentum.
              </p>
              <blockquote>
                Curabitur blandit tempus porttitor. Nullam quis risus eget urna
                mollis ornare vel eu leo. Nullam id dolor id nibh ultricies
                vehicula ut id elit.
              </blockquote>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Cras mattis
                consectetur purus sit amet fermentum. Aenean lacinia bibendum
                nulla sed consectetur.
              </p>
              <Header as="h3" size="large">
                Heading
              </Header>
              <p>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
                ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
              </p>
              <Header as="h3" size="medium">
                Sub-heading
              </Header>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
              <Segment secondary>
                <code>Example code block</code>
              </Segment>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem
                malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus
                commodo, tortor mauris condimentum nibh, ut fermentum massa.
              </p>
              <Header size="medium">Sub-heading</Header>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
                consectetur. Etiam porta sem malesuada magna mollis euismod.
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
              <ul>
                <li>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et.
                </li>
                <li>Donec id elit non mi porta gravida at eget metus.</li>
                <li>Nulla vitae elit libero, a pharetra augue.</li>
              </ul>
              <p>
                Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae
                elit libero, a pharetra augue.
              </p>
              <ol>
                <li>Vestibulum id ligula porta felis euismod semper.</li>
                <li>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </li>
                <li>
                  Maecenas sed diam eget risus varius blandit sit amet non
                  magna.
                </li>
              </ol>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Sed posuere
                consectetur est at lobortis.
              </p>

              <Divider hidden />

              <Header size="large" as="h2">
                <Header.Content>
                  Another blog post
                </Header.Content>
                <Header.Subheader>
                  April 1, 2027 by <a href="#root">Mac</a>
                </Header.Subheader>
              </Header>
              <Divider hidden />
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare
                sem lacinia quam venenatis vestibulum. Sed posuere consectetur
                est at lobortis. Cras mattis consectetur purus sit amet
                fermentum.
              </p>
              <blockquote>
                Curabitur blandit tempus porttitor. Nullam quis risus eget urna
                mollis ornare vel eu leo. Nullam id dolor id nibh ultricies
                vehicula ut id elit.
              </blockquote>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Cras mattis
                consectetur purus sit amet fermentum. Aenean lacinia bibendum
                nulla sed consectetur.
              </p>
              <p>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
                ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
              </p>

              <Divider hidden />

              <Header size="large" as="h2">
                <Header.Content>
                  New feature
                </Header.Content>
                <Header.Subheader>
                  Autumn 13, 2019 by <a href="#root">Semantic</a>
                </Header.Subheader>
              </Header>
              <Divider hidden />
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare
                sem lacinia quam venenatis vestibulum. Sed posuere consectetur
                est at lobortis. Cras mattis consectetur purus sit amet
                fermentum.
              </p>
              <ul>
                <li>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et.
                </li>
                <li>Donec id elit non mi porta gravida at eget metus.</li>
                <li>Nulla vitae elit libero, a pharetra augue.</li>
              </ul>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Cras mattis
                consectetur purus sit amet fermentum. Aenean lacinia bibendum
                nulla sed consectetur.
              </p>
              <p>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
                ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta
                ac consectetur ac, vestibulum at eros.
              </p>
              <Divider hidden />
              <Button basic circular size="huge">
                <a href="#root">Previous</a>
              </Button>
              <Button basic circular size="huge">
                <a href="#root">Next</a>
              </Button>
              <Divider hidden />
            </Grid.Column>
            <Grid.Column width={4} floated="right">
              <Segment secondary style={{border: "none"}}>
                <Header as="h5">About</Header>
                <p>
                  Etiam porta <i>sem malesuada magna mollis euismod</i>. Cras
                  mattis consectetur purus sit amet fermentum. Aenean lacinia
                  bibendum nulla sed consectetur.
                </p>
              </Segment>
              <Header as="h4">Archives</Header>
              <List>
                <List.Item as="a">Septempber 2017</List.Item>
                <List.Item as="a">August 2017</List.Item>
                <List.Item as="a">June 2017</List.Item>
                <List.Item as="a">April 2017</List.Item>
                <List.Item as="a">March 2017</List.Item>
                <List.Item as="a">February 2017</List.Item>
                <List.Item as="a">January 2017</List.Item>
                <List.Item as="a">December 2016</List.Item>
                <List.Item as="a">October 2016</List.Item>
                <List.Item as="a">July 2016</List.Item>
                <List.Item as="a">July 2016</List.Item>
                <List.Item as="a">May 2016</List.Item>
                <List.Item as="a">April 2016</List.Item>
                <List.Item as="a">January 2016</List.Item>
                <List.Item as="a">May 2015</List.Item>
              </List>
              <Header as="h4">Elsewhere</Header>
              <List>
                <List.Item as="a">Github</List.Item>
                <List.Item as="a">Twitter</List.Item>
                <List.Item as="a">Facebook</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Segment secondary style={{paddingBottom: "40px", paddingTop: "40px"}}>
          <Container textAlign="center">
            <p>
              Blog template built for Semantic-UI by{" "}
              <a href="https://semantic-ui-forest.com">@Semantic-UI-Forest</a>.
            </p>
            <a href="#root">Back to top</a>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default App;
