import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import CoordinateDetailsPage from './pages/CoordinateDetailPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/detail' element={<CoordinateDetailsPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;