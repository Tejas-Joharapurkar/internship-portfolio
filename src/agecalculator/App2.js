import React from "react";
import './App.css';
import AgeCalculator from "./calculator/agecalculator";
import { Link } from "react-router-dom";

function App2() {
  return (
    <>
      <div className="nav">
        <Link to='/' style={{ textDecoration: "none" }}>back to Home Page</Link>
      </div>
      <div className="App">
        <AgeCalculator />
      </div>
    </>
  );
}

export default App2;
