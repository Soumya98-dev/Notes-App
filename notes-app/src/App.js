import React from "react";
import uuid from "react-uuid";
import "./App.css";
import MainBar from "./Components/MainBar/MainBar";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  const [notes, setNotes] = React.useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  // const [notes, setNotes] = React.useState([]);
  const [activeNote, setActiveNote] = React.useState(true);

  // *** TO STORE OUR DATA IN THE LOCALSTORAGE
  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // *** WHEN WE CLICK ON THE 'add' BUTTON THIS FUNCTION GET'S TRIGGERED
  function addNotes() {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  }

  // *** WHEN WE CLICK ON THE 'delete' BUTTON THIS FUNCTION GET'S TRIGGERED
  const deleteNotes = (idToDelete) => {
    // *** 'filter' will check if 'note.id'(id created while we pressed the 'add' button) and the 'idToDelete'(which got generated when we clicked on the 'delete' button) is same: if it is not same then it gets filtered out from the array, which eventually deletes our note(or technically gets removed from the array)
    return setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onUpdateNote = (updatedNote) => {
    const noteToUpdateArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });
    setNotes(noteToUpdateArray);
  };

  return (
    <div className="notes-app">
      <SideBar
        notes={notes}
        addNotes={addNotes}
        deleteNotes={deleteNotes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <MainBar activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
