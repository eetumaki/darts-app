//App.js
import React from 'react'
import { Header } from './components/Header'
import { Score } from './components/Score'
import './App.css'

function App() {
  return(
    <div>
      <Header />
      <div className='container'>
        <Score />
      </div>
    </div>
  );
}

export default App;