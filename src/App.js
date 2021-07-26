import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
//changing my functional component app into class component
class App extends Component {
  //whenever i use state put into the componentn with using constructor
  constructor() {
    super();

    this.state = {
      message: "Boom!! YOur Robots are Here!",
      robots: robots,
      searchfield: "",
    };
  }
  // changeMessage = () => {
  //   // this.state.message = "You have subscribed successfully"; // cant mutate directly we used setState()
  //   this.setState({ message: "You have succefully subscribed" });
  // };

  changeMessage = () => {
    // this.setState({ message: "No record found" });
    alert("oops");
  };
  searchChange = (event) => {
    this.setState({ searchfield: event.target.value });

    // robots.length === 0 ? "No robots found" : filteredRobots;
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    // filteredRobots.length === 0 ? "No Robots found" : filteredRobots;
    return (
      <div className="tc">
        <h1>Robo Fans</h1>
        <h2>{this.state.message}</h2>
        {/* <button onClick={this.changeMessage}>Subscribe here!</button> */}

        <SearchBox searchChange={this.searchChange} />
        <CardList robots={filteredRobots} />
        {/* {filteredRobots.length === 0 ? this.changeMessage : ""} */}
      </div>
    );
  }
}

export default App;
