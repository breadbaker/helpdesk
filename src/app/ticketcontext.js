'use client'
import React, { createContext, useReducer } from 'react';

// Define the context
export const TicketContext = createContext();

// Reducer function to handle actions
const ticketReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TICKET':
      return [...state, action.payload];
    case 'UPDATE_STATUS':
      return state.map(ticket =>
        ticket.id === action.payload.id ? { ...ticket, status: action.payload.status } : ticket
      );
    default:
      return state;
  }
};

// Initial state
const initialState = [
{ name: 'John Doe', email: 'john.doe@example.com', description: 'User cannot access the dashboard.', status: 'New' },
{ name: 'Jane Smith', email: 'jane.smith@example.com', description: 'Report generation is failing.', status: 'New' },
{ name: 'Alice Johnson', email: 'alice.johnson@example.com', description: 'Error messages in profile settings.', status: 'New' },
];

// Context provider component
export const TicketProvider = ({ children }) => {
  const [tickets, dispatch] = useReducer(ticketReducer, initialState);

  return (
    <TicketContext.Provider value={{ tickets, dispatch }}>
      {children}
    </TicketContext.Provider>
  );
};
