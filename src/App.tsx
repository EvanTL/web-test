import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import CoordinateDetailsPage from './pages/CoordinateDetailPage';
import SimpleMap from './components/simpleMap';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<SimpleMap {...{lat: -5.551, lng: 114.60}}/>}/>
        <Route path='/detail' element={<CoordinateDetailsPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;