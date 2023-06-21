import React from 'react';
import Table from './Components/Table';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../../node_modules/bootstrap/dist/js/bootstra'
import { Link } from 'react-router-dom';
import './App.css'

function App4() {
  return (
    <>
      <div className="nav">
        <Link to='/' style={{ textDecoration: "none" }}>back to Home Page</Link>
      </div >
      <div className="pt-5" id="bg">
        <h1 className="text-center">User Records</h1>
        <Table />
      </div>
    </>
  );
}

export default App4; 