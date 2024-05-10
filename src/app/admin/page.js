import Image from "next/image";
import Tickets from "../tickets";

export default function Home() {
  const tickets = [
    { name: 'John Doe', email: 'john.doe@example.com', description: 'User cannot access the dashboard.', status: 'New' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', description: 'Report generation is failing.', status: 'New' },
    { name: 'Alice Johnson', email: 'alice.johnson@example.com', description: 'Error messages in profile settings.', status: 'New' },
  ];
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Tickets tickets={tickets} />
      </div>
    </main>
  );
}
