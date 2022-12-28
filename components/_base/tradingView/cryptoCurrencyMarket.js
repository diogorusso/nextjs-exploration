import React from "react";
import { CryptocurrencyMarket } from "react-tradingview-embed";

const CryptocurrencyMarketComp = () => {
  return (
    <CryptocurrencyMarket
      widgetProps={{
        theme: "dark",
        symbols: [
          {
            proName: "BITSTAMP:ETHUSD",
            title: "ETH/USD",
          },
          {
            proName: "BITSTAMP:BTCUSD",
            title: "BTC/USD",
          },
          {
            proName: "BINANCE:BNBUSDT",
            title: "BNB/USDT",
          },
          {
            proName: "BINANCE:ADAUSD",
            title: "ADA/USD",
          },
          {
            proName: "BINANCE:DOTUSDT",
            title: "DOT/USDT",
          },
          {
            proName: "UNISWAP:UNIUSDT",
            title: "UNI/USDT",
          },
        ],
      }}
    />
  );
};

export default CryptocurrencyMarketComp;
