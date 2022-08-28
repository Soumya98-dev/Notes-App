import React from "react";
import "./MainBar.css";
import ReactMarkdown from "react-markdown";

function MainBar({ activeNote, onUpdateNote }) {
  const onEditNote = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };
  // *** BELOW CODE WILL RUN IF THERE IS NO ID RETURNED FROM 'activeNote' prop
  if (!activeNote) {
    return <div className="no-active-note">No Active Note</div>;
  }

  return (
    <div className="notes--mainbar">
      <div className="notes--mainbar--input">
        <input
          type="text"
          autoFocus
          id="title"
          onChange={(event) => onEditNote("title", event.target.value)}
          value={activeNote.title}
        />
        <br />
        <textarea
          id="body"
          placeholder="Write your note here..."
          onChange={(event) => onEditNote("body", event.target.value)}
          value={activeNote.body}
        />
      </div>
      {/* *** NOTES PREVIEW PART */}
      <div className="notes-mainbar--input--preview">
        <h1>{activeNote.title}</h1>
        <ReactMarkdown>{activeNote.body}</ReactMarkdown>
      </div>
    </div>
  );
}

export default MainBar;
