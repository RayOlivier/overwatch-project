import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import UserInfo from "./views/UserInfo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInfo />
      </div>
    );
  }
}

export default App;
