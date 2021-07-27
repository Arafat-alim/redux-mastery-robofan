import React from "react";
import "./popup.css";

function Popup({ closePopup }) {
  return (
    <div className="popup--back">
      <div className="popup--content">
        <div className="popup--close" onClick={closePopup}>
          x
        </div>
      </div>
    </div>
  );
}

export default Popup;
