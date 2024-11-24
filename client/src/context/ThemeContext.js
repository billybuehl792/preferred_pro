import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext(null);

const themes = {
  default: {
    primary: '#135740',
    secondary: '#0f4231',
    text: '#000000',
    background: '#ffffff',
    sidebarBg: '#135740',
    cardBg: '#ffffff',
    cardText: '#000000',
    calendarBg: '#ffffff',
    calendarText: '#000000',
    calendarHeaderBg: '#f3f4f6',
    calendarGridBg: '#ffffff',
    calendarGridText: '#000000',
    calendarWeekendBg: '#f9fafb',
    calendarTodayBg: '#e5e7eb',
    calendarEventBg: '#135740',
    calendarEventText: '#ffffff',
    calendarBorder: '#e5e7eb',
    inputBg: '#ffffff',
    inputText: '#000000',
    inputBorder: '#d1d5db',
    inputFocusBorder: '#135740',
    inputPlaceholder: '#6b7280',
  },
  dark: {
    primary: '#135740',
    secondary: '#0f4231',
    text: '#ffffff',
    background: '#1a1a1a',
    sidebarBg: '#135740',
    cardBg: '#2d2d2d',
    cardText: '#ffffff',
    calendarBg: '#2d2d2d',
    calendarText: '#ffffff',
    calendarHeaderBg: '#374151',
    calendarGridBg: '#1f2937',
    calendarGridText: '#ffffff',
    calendarWeekendBg: '#111827',
    calendarTodayBg: '#374151',
    calendarEventBg: '#135740',
    calendarEventText: '#ffffff',
    calendarBorder: '#4b5563',
    inputBg: '#374151',
    inputText: '#ffffff',
    inputBorder: '#4b5563',
    inputFocusBorder: '#135740',
    inputPlaceholder: '#9ca3af',
  },
};

export const ThemeProvider = ({ children }) => {
  // Retrieve theme from localStorage or default to 'default'
  const [currentTheme, setCurrentTheme] = useState(
    () => localStorage.getItem('theme') || 'default'
  );

  useEffect(() => {
    // Apply theme to the body
    document.body.style.backgroundColor = themes[currentTheme].background;
    document.body.style.color = themes[currentTheme].text;

    // Persist the selected theme in localStorage
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const value = {
    theme: currentTheme,
    themes,
    updateTheme: setCurrentTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
