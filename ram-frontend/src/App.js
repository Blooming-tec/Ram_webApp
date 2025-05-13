import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RamList from './components/RamList';
import RamDetail from './components/RamDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <h1>RAM Management System</h1> {/* Temporary test heading */}
        <Routes>
          <Route path="/" element={<RamList />} />
          <Route path="/rams/new" element={<RamDetail />} />
          <Route path="/rams/:id" element={<RamDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;