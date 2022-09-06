import React from "react";
import "./MainBar.css";
import ReactMarkdown from "react-markdown";

const MainBar = ({ activeNote, onUpdateNote }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
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
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
        />
        <br />
        <textarea
          id="body"
          placeholder="Write your note here..."
          onChange={(event) => onEditField("body", event.target.value)}
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
};

export default MainBar;
