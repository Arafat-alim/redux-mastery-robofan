import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
//changing my functional component app into class component
class App extends Component {
  //whenever i use state put into the componentn with using constructor
  constructor(props) {
    super(props);

    this.state = {
      message: "arafat",
    };
  }
  changeMessage = () => {
    // this.state.message = "You have subscribed successfully"; // cant mutate directly we used setState()
    this.setState({ message: "You have succefully subscribed" });
  };

  render() {
    return (
      <div className="tc">
        <h1>Robo Fans</h1>
        <h2>{this.state.message}</h2>
        <button onClick={this.changeMessage}>Subscribe Me!</button>
        <SearchBox />
        <CardList robots={robots} />
      </div>
    );
  }
}

export default App;
