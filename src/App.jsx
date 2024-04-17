//App.jsx
import React from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { GamePage } from './Pages/GamePage';
import { Introduction } from './Pages/Introduction';
import { HTP1 } from './Pages/HTP1'
import { HTP2 } from './Pages/HTP2';
import { HTP3 } from './Pages/HTP3';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Introduction/>} />
        <Route path="/GamePage" element={<GamePage/>} />
        <Route path="/HTP1" element={<HTP1/>}/>
        <Route path="/HTP2" element={<HTP2/>} />
        <Route path="/HTP3" element={<HTP3/>} />
      </Routes>
    </Router>
  );
}

export default App;