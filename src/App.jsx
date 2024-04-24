//App.jsx
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Main } from './components/Main';
import { HTP1 } from './Pages/HTP1';
import { HTP2 } from './Pages/HTP2';
import { HTP3 } from './Pages/HTP3';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/HTP1" element={<HTP1/>}/>
        <Route path="/HTP2" element={<HTP2/>} />
        <Route path="/HTP3" element={<HTP3/>} />
      </Routes>
    </Router>
  );
}

export default App;