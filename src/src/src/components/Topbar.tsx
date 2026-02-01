import React from "react";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-4 border-b border-gray-700">
      {/* Left: Current symbol */}
      <div className="text-xl font-semibold">
        BTC / USDT
      </div>

      {/* Right: Fake user info */}
      <div className="flex items-center gap-4">
        <div className="text-green-400 font-bold">$10,000</div>
        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white">
          U
        </div>
      </div>
    </div>
  );
}
