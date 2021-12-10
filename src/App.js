import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {
  state = {
    curInput: "",
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
