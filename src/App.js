import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Invoice from "./Components/Invoice/Invoice";

import "./App.css";
import "./Components/Header/Header.css";
import "./Global.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Invoice />
      </div>
    );
  }
}

export default App;
