import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import routes from "./routes";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          {routes}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
