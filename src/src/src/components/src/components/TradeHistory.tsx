import React from "react";
import { useTradingStore } from "../store/useTradingStore";

export default function TradeHistory() {
  const { trades } = useTradingStore();

  if (trades.length === 0) {
    return (
      <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow text-gray-400">
        No trades yet
      </div>
    );
  }

  return (
    <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow">
      <div className="text-lg font-bold mb-2">Trade History</div>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-400">
            <th>Time</th>
            <th>Type</th>
            <th>Amount BTC</th>
            <th>Price USD</th>
          </tr>
        </thead>
        <tbody>
          {trades
            .slice() // copy array
            .reverse() // show latest first
            .map((t, i) => (
              <tr key={i} className="border-t border-gray-700">
                <td>{t.time}</td>
                <td className={t.type === "Buy" ? "text-green-400" : "text-red-400"}>
                  {t.type}
                </td>
                <td>{t.amount}</td>
                <td>${t.price.toFixed(2)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
