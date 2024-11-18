import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const Schedule = () => {
  // Sample job data
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Painting Project A',
      start: new Date(2024, 10, 20), // Nov 20, 2024
      end: new Date(2024, 10, 22), // Nov 22, 2024
      color: '#FF5733', // Orange
    },
    {
      id: 2,
      title: 'Office Renovation',
      start: new Date(2024, 10, 23), // Nov 23, 2024
      end: new Date(2024, 10, 25), // Nov 25, 2024
      color: '#33C1FF', // Blue
    },
  ]);

  // Click handlers
  const handleDateClick = (date) => {
    const jobsOnDate = jobs.filter(
      (job) => date >= job.start && date <= job.end
    );
    alert(
      jobsOnDate.length
        ? `Jobs on ${format(date, 'MMMM do, yyyy')}:\n- ${jobsOnDate
            .map((job) => job.title)
            .join('\n- ')}`
        : `No jobs on ${format(date, 'MMMM do, yyyy')}`
    );
  };

  const handleJobClick = (job) => {
    alert(`Job Details:\nTitle: ${job.title}\nStart: ${job.start}\nEnd: ${job.end}`);
  };

  return (
    <div className="p-6 bg-gray-100 h-full">
      <h1 className="text-2xl font-bold mb-4">Schedule</h1>
      <Calendar
        localizer={localizer}
        events={jobs.map((job) => ({
          ...job,
          title: (
            <span
              style={{
                backgroundColor: job.color,
                padding: '2px 4px',
                borderRadius: '4px',
                color: '#fff',
              }}
            >
              {job.title}
            </span>
          ),
        }))}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '75vh' }}
        onSelectSlot={handleDateClick}
        onSelectEvent={(event) => handleJobClick(event)}
      />
      <div className="mt-4 flex justify-between">
        <button
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          onClick={() => alert('Add Job functionality coming soon!')}
        >
          Add Job
        </button>
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={() => alert('Edit Job functionality coming soon!')}
        >
          Edit Job
        </button>
      </div>
    </div>
  );
};

export default Schedule;
