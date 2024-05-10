'use client'
import React, { useContext } from 'react';
import Ticket from './ticket.js';
import { TicketContext } from './ticketcontext.js';

function TicketsList() {
  const { tickets } = useContext(TicketContext);

  return (
    <div className="max-w-4xl mx-auto my-8 p-4 border shadow-lg">
      <h2 className="text-lg font-bold text-gray-700 mb-4">Tickets List</h2>
      {tickets.map(ticket => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default TicketsList;
