import { create } from "zustand";
import axios from "axios";

interface Trade {
  type: "Buy" | "Sell";
  amount: number;
  price: number;
  time: string;
}

interface TradingState {
  btcPrice: number;
  balance: number;
  positions: number;
  trades: Trade[];
  updatePrice: () => void;
  buyBTC: (amount: number) => void;
  sellBTC: (amount: number) => void;
}

export const useTradingStore = create<TradingState>((set, get) => ({
  btcPrice: 0,
  balance: 10000,
  positions: 0,
  trades: [],

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
        trades: [
          ...get().trades,
          { type: "Buy", amount, price, time: new Date().toLocaleTimeString() },
        ],
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
        trades: [
          ...get().trades,
          { type: "Sell", amount, price, time: new Date().toLocaleTimeString() },
        ],
      });
    } else {
      alert("Not enough BTC");
    }
  },
}));
