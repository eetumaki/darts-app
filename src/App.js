//App.js
import React from 'react'
import { Header } from './components/Header'
import { Score } from './components/Score'
import { AddScore } from './components/AddScore'

import './App.css'

function App() {
  return(
    <div>
      <Header />
      <div className='container'>
        <Score />
        <AddScore />
      </div>
    </div>
  );
}

export default App;