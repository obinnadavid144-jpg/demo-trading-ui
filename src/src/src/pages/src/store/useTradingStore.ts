import { create } from "zustand";
import axios from "axios";

interface TradingState {
  btcPrice: number;
  balance: number;
  positions: number;
  updatePrice: () => void;
  buyBTC: (amount: number) => void;
  sellBTC: (amount: number) => void;
}

export const useTradingStore = create<TradingState>((set, get) => ({
  btcPrice: 0,
  balance: 10000, // fake USD balance
  positions: 0,   // BTC held

  updatePrice: async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      set({ btcPrice: res.data.bitcoin.usd });
    } catch (err) {
      console.error("Price fetch error:", err);
    }
  },

  buyBTC: (amount: number) => {
    const price = get().btcPrice;
    const cost = amount * price;
    if (get().balance >= cost) {
      set({
        balance: get().balance - cost,
        positions: get().positions + amount,
      });
    } else {
      alert("Insufficient balance");
    }
  },

  sellBTC: (amount: number) => {
    if (get().positions >= amount) {
      const price = get().btcPrice;
      set({
        balance: get().balance + amount * price,
        positions: get().positions - amount,
      });
    } else {
      alert("Not enough BTC");
    }
  },
}));
