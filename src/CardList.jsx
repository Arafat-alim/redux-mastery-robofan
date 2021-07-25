import React from "react";
import Cards from "./Cards";

const CardList = ({ robots }) => {
  return (
    <div>
      <Cards
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
      />
    </div>
  );
};

export default CardList;

//this is the parent COmponent
