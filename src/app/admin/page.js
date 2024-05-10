'use client'
import Tickets from "../tickets.js";
import React, { useEffect, useContext } from 'react';
import { TicketContext } from '../ticketcontext.js';  // Assume the file is named TicketContext.js

export default function Admin() {
  const { dispatch } = useContext(TicketContext);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('/api/tickets');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        dispatch({
          type: 'SET_TICKETS',
          payload: data
        });
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Tickets />
      </div>
    </main>
  );
}
