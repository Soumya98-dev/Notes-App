import React from "react";
import "./MainBar.css";

function MainBar() {
  return (
    <div className="notes--mainbar">
      <div className="notes--mainbar--input">
        <input type="text" autoFocus />
        <br />
        <textarea placeholder="Write your note here..." />
      </div>
      <div className="notes-mainbar--input--preview">
        <h1>TITLE</h1>
        <p>note preview</p>
      </div>
    </div>
  );
}

export default MainBar;
