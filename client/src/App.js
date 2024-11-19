// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Schedule from "./pages/Schedule";
import TimeClock from "./pages/TimeClock";
import AddJob from "./pages/AddJob";

function AppContent() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="main-container">
      <div className="app-content">
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? <Navigate to="/schedule" /> : <Navigate to="/login" />
            }
          />
          <Route path="/login" element={<Login />} />
          {isAuthenticated && (
            <>
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/time-clock" element={<TimeClock />} />
              <Route path="/add-job" element={<AddJob />} />
            </>
          )}
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
