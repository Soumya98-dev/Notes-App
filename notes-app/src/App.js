import React from "react";
import "./App.css";
import MainBar from "./Components/MainBar/MainBar";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  return (
    <div className="notes-app">
      <SideBar />
      <MainBar />
    </div>
  );
}

export default App;
