import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

function Settings() {
  const { theme, themes, updateTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const currentTheme = themes[theme];

  const handleApplyTheme = () => {
    updateTheme(selectedTheme);
  };

  return (
    <div className="p-6" style={{ color: currentTheme.text }}>
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <div className="shadow rounded-lg p-6" style={{ 
        backgroundColor: currentTheme.cardBg,
        color: currentTheme.cardText
      }}>
        <h2 className="text-xl font-semibold mb-4">Theme Settings</h2>
        
        <div className="flex items-center gap-4 mb-6">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="theme"
              value="default"
              checked={selectedTheme === 'default'}
              onChange={(e) => setSelectedTheme(e.target.value)}
              className="form-radio h-4 w-4 text-green-600"
            />
            <span className="ml-2">Default Theme</span>
          </label>
          
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={selectedTheme === 'dark'}
              onChange={(e) => setSelectedTheme(e.target.value)}
              className="form-radio h-4 w-4 text-green-600"
            />
            <span className="ml-2">Dark Theme</span>
          </label>
        </div>

        <button
          onClick={handleApplyTheme}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
        >
          Apply Theme
        </button>
      </div>
    </div>
  );
}

export default Settings;