import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; // Ensure the correct path
import Sidebar from './components/layout/Sidebar';
import Schedule from './pages/Schedule';
import AddJob from './pages/AddJob';
import Settings from './pages/Settings';

const AppContent = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 pl-64">
        <Routes>
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/add-job" element={<AddJob />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/schedule" />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/*" element={<AppContent />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
