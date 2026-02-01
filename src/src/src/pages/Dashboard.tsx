import React from "react";

export default function Dashboard() {
  return (
    <div className="flex-1 p-6 overflow-auto">
      {/* Top cards */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <div className="text-sm text-gray-400">Portfolio Value</div>
          <div className="text-xl font-bold">$10,000</div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <div className="text-sm text-gray-400">Open Positions</div>
          <div className="text-xl font-bold">2</div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <div className="text-sm text-gray-400">PnL</div>
          <div className="text-xl font-bold text-green-400">$250</div>
        </div>
      </div>

      {/* Placeholder for chart */}
      <div className="bg-gray-800 h-96 rounded-lg shadow mb-6 flex items-center justify-center text-gray-400">
        Candlestick Chart Here
      </div>

      {/* Placeholder for trade panel */}
      <div className="bg-gray-800 p-4 rounded-lg shadow flex gap-4">
        <div className="flex-1 flex flex-col gap-2">
          <div className="text-gray-400">Buy</div>
          <input
            type="number"
            placeholder="Amount"
            className="p-2 rounded bg-gray-700 text-white"
          />
          <button className="bg-green-500 text-black p-2 rounded font-bold">
            Buy BTC
          </button>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <div className="text-gray-400">Sell</div>
          <input
            type="number"
            placeholder="Amount"
            className="p-2 rounded bg-gray-700 text-white"
          />
          <button className="bg-red-500 text-black p-2 rounded font-bold">
            Sell BTC
          </button>
        </div>
      </div>
    </div>
  );
}
