import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Schedule from './pages/Schedule';
import TimeClock from './pages/TimeClock';
import Team from './pages/Team';
import AddJob from './pages/AddJob';
import Login from './pages/Login'; // Assuming Login page exists
import { useState } from 'react';

function App() {
  // Simulating authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="flex">
        {isAuthenticated && <Sidebar />} {/* Show Sidebar only after logging in */}
        <div className="flex-1">
          <main className="p-4">
            <Routes>
              {/* Redirect to login if not authenticated */}
              <Route
                path="/"
                element={!isAuthenticated ? <Navigate to="/login" /> : <Navigate to="/schedule" />}
              />
              <Route
                path="/login"
                element={<Login onLogin={() => setIsAuthenticated(true)} />}
              />
              {isAuthenticated && (
                <>
                  <Route path="/schedule" element={<Schedule />} />
                  <Route path="/time-clock" element={<TimeClock />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/add-job" element={<AddJob />} />
                </>
              )}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
