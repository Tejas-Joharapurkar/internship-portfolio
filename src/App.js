import React from 'react'
import App2 from './agecalculator/App2'
import App1 from './colorpicker/App1'
import App3 from './calculator/App3'
import App4 from './recordtable/App4'
import App5 from './wordcounter/App5'
import Home from './Home'
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/App1" element={<App1 />} />
        <Route path="/App2" element={<App2 />} />
        <Route path="/App3" element={<App3 />} />
        <Route path="/App4" element={<App4 />} />
        <Route path="/App5" element={<App5 />} />
      </Routes>
    </>
  )
}

export default App