import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import Popup from "../Components/Popup";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error,
    isPending: state.requestRobots.isPending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchChange: (event) => dispatch(setSearchField(event.target.value)),
    // onRequestRobots: () => requestRobots(dispatch),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};
//changing my functional component app into class component
class App extends Component {
  //whenever i use state put into the componentn with using constructor
  constructor() {
    super();

    this.state = {
      message: "Boom!! YOur Robots are Here!",
      robots: [],
      // searchfield: "",
      popup: false,
    };
  }
  changeMessage = () => {
    // this.state.message = "You have subscribed successfully"; // cant mutate directly we used setState()
    this.setState({ message: "You have succefully subscribed" });
  };

  // changeMessage = () => {
  //   // this.setState({ message: "No record found" });
  //   alert("oops");
  // };
  // searchChange = (event) => {
  //   this.setState({ searchfield: event.target.value });

  //   robots.length === 0 ? "No robots found" : filteredRobots;
  // };
  async componentDidMount() {
    // console.log(this.props.store.getState());
    //fetching my api from here
    //   await fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((users) => {
    //       this.setState({ robots: users });
    //     });
    this.props.onRequestRobots();
  }

  //Pop-Up
  openPopup = () => {
    this.setState({ popup: true });
  };

  closePopup = () => {
    this.setState({ popup: false });
  };
  render() {
    console.log("see", this.props);
    // const { robots} = this.state
    const { message, popup } = this.state;
    const { searchChange, searchField, robots, isPending } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return isPending ? (
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
            <SearchBox searchChange={searchChange} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
