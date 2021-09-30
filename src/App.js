import React from "react";
import WithoutFormik from "./components/WithoutFormik";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Header />
        <WithoutFormik />
      </div>
    </div>
  );
}

export default App;
