import React from 'react';

const Dashboard = () => {
    return (
        <div className="p-6 ml-64">
            <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 shadow rounded">Job Metrics Placeholder</div>
                <div className="bg-white p-4 shadow rounded">Job Pipeline Placeholder</div>
                <div className="bg-white p-4 shadow rounded">Recent Updates Placeholder</div>
            </div>
        </div>
    );
};

export default Dashboard;
