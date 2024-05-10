'use client'
import React, { useState } from 'react';

function Ticket({ ticket }) {
  const [status, setStatus] = useState(ticket.status || 'New');

  const updateStatus = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <div className="mb-4 p-4 border rounded shadow-sm">
      <h3 className="text-md font-semibold text-gray-800">{ticket.name}</h3>
      <h3 className="text-md font-semibold text-gray-800">{ticket.email}</h3>
      <p className="text-sm text-gray-600">{ticket.description}</p>
      <p className="text-sm font-medium text-blue-500">Status: {status}</p>
      <div className="flex space-x-2 mt-2">
        <button onClick={() => updateStatus('In Progress')} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition-colors">
          Move to In Progress
        </button>
        <button onClick={() => updateStatus('Resolved')} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors">
          Resolve
        </button>
      </div>
    </div>
  );
}

export default Ticket;
