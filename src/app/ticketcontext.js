'use client'
import React, { createContext, useReducer } from 'react';

// Define the context
export const TicketContext = createContext();

// Reducer function to handle actions
const ticketReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TICKETS':
        return action.payload;
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
const initialState = [];

// Context provider component
export const TicketProvider = ({ children }) => {
  const [tickets, dispatch] = useReducer(ticketReducer, initialState);

  return (
    <TicketContext.Provider value={{ tickets, dispatch }}>
      {children}
    </TicketContext.Provider>
  );
};
