import React from "react";
import NavBar from "./components/nav/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <div>
          <NavBar />
        </div>
      </React.StrictMode>
    </div>
  );
}

export default App;
