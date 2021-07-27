import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
//changing my functional component app into class component
class App extends Component {
  //whenever i use state put into the componentn with using constructor
  constructor() {
    super();

    this.state = {
      message: "Boom!! YOur Robots are Here!",
      robots: [],
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
  async componentDidMount() {
    //fetching my api from here
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }
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
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.changeMessage}>Subscribe here!</button> */}

        <SearchBox searchChange={this.searchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
        {/* {filteredRobots.length === 0 ? this.changeMessage : ""} */}
      </div>
    );
  }
}

export default App;
