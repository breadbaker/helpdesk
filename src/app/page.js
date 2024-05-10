'use client'
import NewTicket from "./newticket";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <NewTicket />
      </div>
      <a href="/admin" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Go To Admin</a>

    </main>
  );
}
