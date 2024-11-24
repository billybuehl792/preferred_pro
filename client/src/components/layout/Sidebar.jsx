import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { CalendarDaysIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'; // Correct imports
import logo from '../../assets/preferred_logo.png'; // Correct logo path

const Sidebar = () => {
  const { themes, theme } = useTheme();
  const currentTheme = themes[theme];

  return (
    <div
      className="fixed inset-y-0 left-0 w-64"
      style={{
        backgroundColor: currentTheme.sidebarBg,
        color: currentTheme.text,
      }}
    >
      <div
        className="p-6 border-b flex justify-center"
        style={{ borderColor: currentTheme.cardBg }}
      >
        <img src={logo} alt="App Logo" className="h-16 w-auto" />
      </div>
      <nav className="mt-4">
        <NavLink
          to="/schedule"
          className={({ isActive }) =>
            `block px-6 py-3 flex items-center gap-4 ${
              isActive
                ? 'font-bold underline'
                : 'hover:bg-opacity-50'
            }`
          }
          style={({ isActive }) => ({
            backgroundColor: isActive ? currentTheme.cardBg : 'transparent',
            color: isActive ? currentTheme.cardText : currentTheme.text,
          })}
        >
          <CalendarDaysIcon className="h-5 w-5" /> {/* Schedule Icon */}
          Schedule
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `block px-6 py-3 flex items-center gap-4 ${
              isActive
                ? 'font-bold underline'
                : 'hover:bg-opacity-50'
            }`
          }
          style={({ isActive }) => ({
            backgroundColor: isActive ? currentTheme.cardBg : 'transparent',
            color: isActive ? currentTheme.cardText : currentTheme.text,
          })}
        >
          <Cog6ToothIcon className="h-5 w-5" /> {/* Settings Icon */}
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
