import React from "react";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="notes--sidebar">
      <div className="notes--sidebar--title">
        <h1>Notes</h1>
        <button>Add</button>
      </div>
      <div className="notes-sidebar--note-snippet">
        <div className="note-small-title">
          <p>
            <strong>TITLE</strong>
          </p>
          <p>
            <strong>Note Preview</strong>
          </p>
          <p>Last modified [date]</p>
        </div>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default SideBar;
