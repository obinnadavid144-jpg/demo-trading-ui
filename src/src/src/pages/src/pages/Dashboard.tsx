import React, { useEffect, useState } from "react";
import { useTradingStore } from "../store/useTradingStore";
import TradeHistory from "../components/TradeHistory";

export default function Dashboard() {
  const { btcPrice, balance, positions, updatePrice, buyBTC, sellBTC } = useTradingStore();
  const [amount, setAmount] = useState(0);

  // Fetch live BTC price every 5 seconds
  useEffect(() => {
    updatePrice();
    const interval = setInterval(updatePrice, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 p-6 overflow-auto">
      {/* Top cards */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <div className="text-sm text-gray-400">Portfolio Value</div>
          <div className="text-xl font-bold">
            ${(balance + positions * btcPrice).toFixed(2)}
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <div className="text-sm text-gray-400">Open Positions</div>
          <div className="text-xl font-bold">{positions.toFixed(4)} BTC</div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <div className="text-sm text-gray-400">BTC Price</div>
          <div className="text-xl font-bold text-green-400">${btcPrice.toFixed(2)}</div>
        </div>
      </div>

      {/* Buy/Sell Panel */}
      <div className="bg-gray-800 p-4 rounded-lg shadow flex gap-4">
        {/* Buy Section */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="text-gray-400">Buy</div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            placeholder="Amount BTC"
            className="p-2 rounded bg-gray-700 text-white"
          />
          <button
            onClick={() => buyBTC(amount)}
            className="bg-green-500 text-black p-2 rounded font-bold"
          >
            Buy BTC
          </button>
        </div>

        {/* Sell Section */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="text-gray-400">Sell</div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            placeholder="Amount BTC"
            className="p-2 rounded bg-gray-700 text-white"
          />
          <button
            onClick={() => sellBTC(amount)}
            className="bg-red-500 text-black p-2 rounded font-bold"
          >
            Sell BTC
          </button>
        </div>
      </div>

      {/* Trade History */}
      <TradeHistory />
    </div>
  );
}
