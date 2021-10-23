import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Users from "./components/Users/Users";
import AddUser from "./components/AddUser/AddUser";

function App() {
  return (
    <div className="App">
      <Users />
    </div>
  );
}

export default App;
