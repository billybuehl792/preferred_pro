import React from 'react';

const TopNav = () => {
    return (
        <nav className="bg-blue-600 p-4 flex justify-between items-center text-white">
            <h1 className="text-xl font-bold">Preferred Pro</h1>
            <ul className="flex space-x-4">
                <li><a href="#dashboard" className="hover:text-gray-300">Dashboard</a></li>
                <li><a href="#schedule" className="hover:text-gray-300">Schedule</a></li>
                <li><a href="#change-orders" className="hover:text-gray-300">Change Orders</a></li>
                <li><a href="#tool-requests" className="hover:text-gray-300">Tool Requests</a></li>
            </ul>
        </nav>
    );
};

export default TopNav;
