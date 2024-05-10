import React from 'react';
import { TicketProvider } from './ticketcontext.js';  // Adjust the import path as necessary

function MyApp({ Component, pageProps }) {
  return (
    <TicketProvider>
      <Component {...pageProps} />
      <h1>hello</h1>
    </TicketProvider>
  );
}

export default MyApp;