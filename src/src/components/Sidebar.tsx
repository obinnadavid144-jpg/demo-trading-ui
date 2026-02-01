import React from "react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 p-4 flex flex-col">
      <div className="text-2xl font-bold mb-8">DemoTrade</div>
      <ul className="space-y-4">
        <li className="hover:text-green-400 cursor-pointer">Markets</li>
        <li className="hover:text-green-400 cursor-pointer">Portfolio</li>
        <li className="hover:text-green-400 cursor-pointer">History</li>
        <li className="hover:text-green-400 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
}
