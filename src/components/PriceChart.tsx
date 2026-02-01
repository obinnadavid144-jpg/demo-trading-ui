import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

interface Candle {
  x: Date;
  y: [number, number, number, number]; // [open, high, low, close]
}

export default function PriceChart() {
  const [data, setData] = useState<Candle[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=1"
        );
        const candles = res.data.map((c: number[]) => ({
          x: new Date(c[0]),
          y: [c[1], c[2], c[3], c[4]],
        }));
        setData(candles);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // refresh every 5s
    return () => clearInterval(interval);
  }, []);

  const series = [{ data }];

  const options = {
    chart: {
      type: "candlestick",
      height: 350,
      toolbar: { show: true },
      background: "#1f2937",
      foreColor: "#fff",
    },
    title: { text: "BTC / USD", align: "left", style: { color: "#fff" } },
    xaxis: { type: "datetime" },
    yaxis: { tooltip: { enabled: true } },
    plotOptions: {
      candlestick: {
        colors: { upward: "#00b894", downward: "#d63031" }, // green & red candles
      },
    },
  };

  return <Chart options={options} series={series} type="candlestick" height={350} />;
}
