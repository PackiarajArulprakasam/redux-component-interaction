import React, { Component } from "react";
import "./App.css";
import Card1 from "./components/card1";
import Card2 from "./components/card2";
import SendMessage from "./components/sendMessage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SendMessage />
        <Card1 className={"card"} />
        <Card2 className={"card"} />
      </div>
    );
  }
}

export default App;
