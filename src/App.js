import React from "react";
import WithFormik from "./components/WithFormik";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Header />
        <WithFormik />
      </div>
    </div>
  );
}

export default App;
