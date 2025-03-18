import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DestinationContainer from './Components/DestinationContainer'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DestinationContainer />} />
      </Routes>
    </Router>
  );
}

export default App;