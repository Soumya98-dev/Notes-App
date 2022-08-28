import React from "react";
import "./SideBar.css";

function SideBar({ notes, addNotes, deleteNotes, activeNote, setActiveNote }) {
  const sortedNoteTitles = notes.sort(
    (a, b) => b.lastModified - a.lastModified
  );

  const newNoteSnippet = sortedNoteTitles.map((note) => {
    return (
      <div
        className={`notes-sidebar--note-snippet ${
          activeNote == note.id ? "active" : ""
        }`}
      >
        <div
          className="note-small-title"
          onClick={() => setActiveNote(note.id)}
        >
          <p>
            <strong>{note.title}</strong>
          </p>
          <p>
            <strong>{note.body && `${note.body.substr(0, 50)}...`}</strong>
          </p>
          <p>
            {new Date(note.lastModified).toLocaleDateString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        <button onClick={() => deleteNotes(note.id)}>Delete</button>
      </div>
    );
  });

  return (
    <div className="notes--sidebar">
      <div className="notes--sidebar--title">
        <h1>Notes</h1>
        <button onClick={addNotes}>Add</button>
      </div>
      {newNoteSnippet}
    </div>
  );
}

export default SideBar;
