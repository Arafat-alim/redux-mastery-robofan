import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
//changing my functional component app into class component
class App extends Component {
  render() {
    return (
      <div className="tc">
        <h1>Robo Fans</h1>
        <SearchBox />
        <CardList robots={robots} />
      </div>
    );
  }
}

export default App;
