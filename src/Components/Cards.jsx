import React from "react";

const Cards = ({ id, name, email, username }) => {
  return (
    <div className="bg-light-green dib pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <div>
        <h2>Name - {name}</h2>
        <h3>Username - {username}</h3>
        <h3>Email - {email}</h3>
      </div>
    </div>
  );
};

export default Cards;
