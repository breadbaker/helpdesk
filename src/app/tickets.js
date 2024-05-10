'use client'
import React from 'react';

import Ticket from './Ticket';

function TicketsList({ tickets }) {
  return (
    <div className="max-w-4xl mx-auto my-8 p-4 border shadow-lg">
      <h2 className="text-lg font-bold text-gray-700 mb-4">Tickets List</h2>
      {tickets.map((ticket, index) => (
        <Ticket key={index} ticket={ticket} />
      ))}
    </div>
  );
}

export default TicketsList;
