import React from "react";
import Cards from "./Cards";

//!Note calling component all time is not correct for us

const CardList = ({ robots }) => {
  //   const cardComponent = robots.map((user, index) => {
  //     return (
  //       <Cards
  //         id={robots[index].id}
  //         name={robots[index].name}
  //         email={robots[index].email}
  //         username={robots[index].username}
  //       />
  //     );
  //   });
  return (
    <div>
      {/* <Cards
        id={robots[0].id}
        name={robots[0].name}
        email={robots[0].email}
        username={robots[0].username}
      />
      <Cards
        id={robots[1].id}
        name={robots[1].name}
        email={robots[1].email}
        username={robots[1].username}
      />
      <Cards
        id={robots[2].id}
        name={robots[2].name}
        email={robots[2].email}
        username={robots[2].username}
      /> */}
      {/* {cardComponent} */}
      {/*! Second method to do the same thing */}

      {robots.map((user, index) => {
        return (
          <Cards
            id={robots[index].id}
            name={robots[index].name}
            email={robots[index].email}
            username={robots[index].username}
          />
        );
      })}
    </div>
  );
};

export default CardList;

//this is the parent COmponent
