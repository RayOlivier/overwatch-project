import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./ducks/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            {routes}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
