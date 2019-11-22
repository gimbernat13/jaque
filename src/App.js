import React from "react";
import "./App.css";
import Users from "./Components/Users/Users";
import Nav from "./Ui/Nav";
// import Sidebar from "./Ui/Sidebar";


function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Sidebar /> */}
      <div className="users-container">
        <Users />
      </div>
    </div>
  );
}

export default App;
