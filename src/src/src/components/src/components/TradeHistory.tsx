import React from "react";
import { useTradingStore } from "../store/useTradingStore";

export default function TradeHistory() {
  const { positions, btcPrice } = useTradingStore();

  // For demo, generate fake trades
  const trades = [
    { type: "Buy", amount: 0.1, price: 27000 },
    { type: "Sell", amount: 0.05, price: 27200 },
    { type: "Buy", amount: 0.2, price: 26950 },
  ];

  return (
    <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow">
      <div className="text-lg font-bold mb-2">Trade History</div>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-400">
            <th>Type</th>
            <th>Amount BTC</th>
            <th>Price USD</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((t, i) => (
            <tr key={i} className="border-t border-gray-700">
              <td className={t.type === "Buy" ? "text-green-400" : "text-red-400"}>
                {t.type}
              </td>
              <td>{t.amount}</td>
              <td>${t.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
