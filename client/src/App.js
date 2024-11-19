import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Schedule from './pages/Schedule';

const AppContent = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/schedule" element={<Schedule />} />
          {/* Add more routes for other pages like /team */}
          <Route path="*" element={<Navigate to="/schedule" />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Render AppContent for all main routes */}
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </Router>
  );
};

export default App;
