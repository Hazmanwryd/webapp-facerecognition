"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const attendanceData = [
  { id: "1", name: "John Doe", date: "2024-01-07", time: "09:00", status: "Check In" },
  { id: "2", name: "Jane Dae", date: "2024-01-06", time: "10:30", status: "Check In"},
  { id: "3", name: "Jane Die", date: "2024-01-06", time: "11:30", status: "Check In"},
  { id: "4", name: "Jane Due", date: "2024-01-06", time: "12:30", status: "Check In"},
  { id: "5", name: "Jane Dee", date: "2024-01-06", time: "13:30", status: "Check In"},
  { id: "6", name: "Jane Doe", date: "2024-01-06", time: "14:30", status: "Check Out"},
  { id: "7", name: "Jane Foe", date: "2024-01-06", time: "15:30", status: "Check Out"},
  { id: "8", name: "Jane Hoe", date: "2024-01-06", time: "16:30", status: "Check Out"},
  { id: "9", name: "Jane Joe", date: "2024-01-06", time: "17:30", status: "Check Out"},
];

export default function Userinfo() {
  const { data: session } = useSession();

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-green-600 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-white font-semibold">Attendance Dashboard</h1>
          <div className="text-white">
            Welcome, {session?.user?.name} |{" "}
            <button onClick={() => signOut()} className="underline cursor-pointer">
              Log Out
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow grid place-items-center">
        <div className="shadow-lg p-10 bg-zinc-300/10 my-6 overflow-x-auto">
          <h2 className="text-2xl text-center font-semibold mb-4">Attendance History</h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Id</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Time</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((entry, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-20 border-b">{entry.id}</td>
                  <td className="py-2 px-20 border-b">{entry.name}</td>
                  <td className="py-2 px-20 border-b">{entry.date}</td>
                  <td className="py-2 px-20 border-b">{entry.time}</td>
                  <td className="py-2 px-20 border-b">{entry.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="fixed bottom-4 left-4">
        <Link href="/adduser">
          <p className="bg-blue-500 text-white py-2 px-4 rounded-md text-sm">Add User</p>
        </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
