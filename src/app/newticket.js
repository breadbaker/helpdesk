'use client'
import React, { useState, useContext } from 'react';
import { TicketContext } from './ticketcontext.js';  // Assume the file is named TicketContext.js

function NewTicket() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const { dispatch } = useContext(TicketContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_TICKET',
      payload: { id: Date.now(), name, email, description, status: 'New' }
    });
    // Clear form fields
    setName('');
    setEmail('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-8 p-4 border shadow-lg">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <div className="flex items-center justify-between">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </div>
    </form>
  );
}

export  default NewTicket;  // Updated for this display, adjust if exporting as default.
