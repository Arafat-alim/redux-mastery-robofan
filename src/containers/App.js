import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import Popup from "../Components/Popup";
//changing my functional component app into class component
class App extends Component {
  //whenever i use state put into the componentn with using constructor
  constructor() {
    super();

    this.state = {
      message: "Boom!! YOur Robots are Here!",
      robots: [],
      searchfield: "",
      popup: false,
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
    console.log(this.props.store);
    //fetching my api from here
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  //Pop-Up
  openPopup = () => {
    this.setState({ popup: true });
  };

  closePopup = () => {
    this.setState({ popup: false });
  };
  render() {
    const { robots, searchfield, message, popup } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? (
      <h1>Loading ....</h1>
    ) : (
      <>
        {popup ? <Popup closePopup={this.closePopup} /> : ""}
        {filteredRobots.length === 0 ? (
          <h1>No robots to show</h1>
        ) : (
          <div className="tc">
            <h1>Robo Fans</h1>
            <h1>{message}</h1>
            {/* <button onClick={this.changeMessage}>Subscribe here!</button> */}
            <button onClick={this.openPopup}>Open Popup Button</button>
            <SearchBox searchChange={this.searchChange} />
            <Scroll>
              <CardList robots={filteredRobots} />
            </Scroll>
            {/* {filteredRobots.length === 0 ? this.changeMessage : ""} */}
          </div>
        )}
      </>
    );
  }
}

export default App;
