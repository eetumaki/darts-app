//App.jsx
import React from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { GamePage } from './Pages/GamePage';
import { Introduction } from './Pages/Introduction';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Introduction/>} />
        <Route path="/GamePage" element={<GamePage/>} />
      </Routes>
    </Router>
  );
}

export default App;