import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";

class App extends Component {
  state = {
    curInput: ""
  };

  render() {
    return (
      <div className="main-window">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
