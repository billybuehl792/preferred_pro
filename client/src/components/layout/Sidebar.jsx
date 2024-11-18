import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-green-600 text-white h-full">
      <div className="p-4 text-2xl font-bold border-b border-green-700">
        Preferred LLC
      </div>
      <nav className="mt-4">
        <Link to="/schedule" className="block py-2 px-4 rounded hover:bg-green-700 transition duration-300">
          Schedule
        </Link>
        <Link to="/time-clock" className="block py-2 px-4 rounded hover:bg-green-700 transition duration-300">
          Time Clock
        </Link>
        <Link to="/team" className="block py-2 px-4 rounded hover:bg-green-700 transition duration-300">
          Team
        </Link>
        <Link to="/add-job" className="block py-2 px-4 rounded hover:bg-green-700 transition duration-300">
          Add Job
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
