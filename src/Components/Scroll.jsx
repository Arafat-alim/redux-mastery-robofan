import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "2px solid black",
        height: "500px",
        marginTop: "10px",
        padding: "10px",
        cursor: "pointer",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
