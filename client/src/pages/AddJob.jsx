import React, { useState } from 'react';

const AddJob = () => {
  const [jobName, setJobName] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [mapUrl, setMapUrl] = useState('');

  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const handleLocationChange = async (e) => {
    const inputLocation = e.target.value;
    setLocation(inputLocation);

    if (inputLocation.trim() !== '') {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            inputLocation
          )}&key=${API_KEY}`
        );
        const data = await response.json();

        if (data.status === 'OK' && data.results[0]) {
          const { lat, lng } = data.results[0].geometry.location;
          setMapUrl(
            `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${lat},${lng}`
          );
        }
      } catch (error) {
        console.error('Error fetching geocoding data:', error);
      }
    } else {
      setMapUrl('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job Added:', { jobName, location, startDate, endDate });
    alert('Job added successfully!');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-green-600">Add Job</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="jobName" className="block text-sm font-medium text-gray-700">
            Job Name
          </label>
          <input
            type="text"
            id="jobName"
            value={jobName}
            onChange={(e) => setJobName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            placeholder="Enter job name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={handleLocationChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            placeholder="Enter location"
          />
        </div>

        {mapUrl && (
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-700">Location Preview</h3>
            <iframe
              src={mapUrl}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Maps Preview"
            ></iframe>
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
