import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ThemeProvider from "react-toolbox/lib/ThemeProvider";
import Button from "react-toolbox/lib/button/Button";
import theme from "./assets/react-toolbox/theme.js";
import "./assets/react-toolbox/theme.css";

import {
  Card,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from "react-toolbox/lib/card";

const dummyText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

class App extends Component {
  render() {
    console.log(theme);
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Card style={{ width: "350px" }}>
            <CardTitle
              avatar="https://placeimg.com/80/80/animals"
              title="Avatar style title"
              subtitle="Subtitle here"
            />
            {/* <CardMedia
              aspectRatio="wide"
              image="https://placeimg.com/800/450/nature"
            />
            <CardTitle title="Title goes here" subtitle="Subtitle here" />
            <CardText>
              {dummyText}
            </CardText>
            <CardActions theme={theme}>
              <Button label="Action 1" />
              <Button label="Action 2" />
            </CardActions> */}
          </Card>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
