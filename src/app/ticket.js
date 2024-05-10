'use client'
import React, { useState, useContext } from 'react';
import { TicketContext } from './ticketcontext.js';  // Assume the file is named TicketContext.js


function Ticket({ ticket }) {
  const { dispatch } = useContext(TicketContext);

  const updateStatus = async (newStatus) => {
    try {
      const response = await fetch('/api/tickets', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...ticket,
            status: newStatus
        }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log('Submitted:', result);
      // Clear form fields or handle success
      dispatch({
        type: 'UPDATE_STATUS',
        payload: result
      });
    } catch (error) {
      console.error('Failed to submit ticket:', error);
    }
  };

  return (
    <div className="mb-4 p-4 border rounded shadow-sm">
      <h3 className="text-md font-semibold text-gray-800">{ticket.name}</h3>
      <h3 className="text-md font-semibold text-gray-800">{ticket.email}</h3>
      <p className="text-sm text-gray-600">{ticket.description}</p>
      <p className="text-sm font-medium text-blue-500">Status: {ticket.status}</p>
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
