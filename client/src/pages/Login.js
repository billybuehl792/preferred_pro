import React, { useState } from 'react';
import logo from '../assets/preferred_logo.png'; // Ensure this is the correct path to your logo

function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted', credentials);

    // Temporary mock authentication; replace with your logic
    if (credentials.email === 'user@example.com' && credentials.password === 'password') {
      onLogin(); // Notify App of successful login
    } else {
      alert('Invalid credentials'); // Temporary error handling
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#135740' }}>
      <form onSubmit={handleSubmit} className="max-w-md w-full bg-white p-6 rounded shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Company Logo" className="h-16 w-auto" />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center text-black">Login</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-black">
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-black">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your password"
          />
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end mb-4">
          <a
            href="#"
            className="text-sm font-medium"
            style={{ color: '#1D4ED8', hover: { color: '#1E40AF' } }} // Blue link color
          >
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 rounded text-white transition"
          style={{ backgroundColor: '#135740', hover: { backgroundColor: '#0F4836' } }}
        >
          Sign In
        </button>

        {/* Sign Up Link */}
        <div className="text-center mt-4">
          <p className="text-sm font-medium text-black">
            Don't have an account?{' '}
            <a href="#" className="font-bold" style={{ color: '#1D4ED8', hover: { color: '#1E40AF' } }}>
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
