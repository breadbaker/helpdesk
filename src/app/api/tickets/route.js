import { NextRequest } from "next/server";
import { cookies } from 'next/headers'
const ticketKey = 'abaoeuaeoaaab'
const getTickets = () => {
  return cookies().get(ticketKey) ? JSON.parse(cookies().get(ticketKey).value) : []   
}

const setTickets = (tickets) => {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  cookies().set(ticketKey, JSON.stringify(tickets), {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}

export async function GET(req, res) {
  return new Response(JSON.stringify(getTickets()), { status: 200 });  // Example response
}

export async function PUT(req, res) {
  let ticket = await req.json()

  let tickets = getTickets()

  tickets.forEach((element, index) => {
    if(element.id === ticket.id) {
          tickets[index] = ticket;
      }
  });


  setTickets(tickets) 
  return new Response(JSON.stringify(ticket), {
      status: 200
  })
} 

export async function POST(req, res) {
  let body = await req.json()
  body.id = Date.now();
  body.status = 'New';

  let tickets = getTickets();

  tickets.push(body)

  setTickets(tickets)

  return new Response(JSON.stringify(body), {
      status: 200
  })
}
