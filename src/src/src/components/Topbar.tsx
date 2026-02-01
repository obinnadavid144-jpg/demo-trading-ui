import React from "react";
import BTCIcon from "./icons/BTCIcon";
import { useTradingStore } from "../store/useTradingStore";

export default function Topbar() {
  const { btcPrice } = useTradingStore();

  return (
    <div className="flex justify-between items-center bg-gray-800 p-4 border-b border-gray-700">
      {/* Left: BTC Symbol + Icon */}
      <div className="flex items-center gap-2 text-xl font-semibold">
        <BTCIcon size={24} />
        BTC / USDT
      </div>

      {/* Right: Fake user info */}
      <div className="flex items-center gap-4">
        <div className="text-green-400 font-bold">${btcPrice.toFixed(2)}</div>
        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white">
          U
        </div>
      </div>
    </div>
  );
}
