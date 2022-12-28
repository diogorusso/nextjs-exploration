import React from 'react';
import { StockMarket } from 'react-tradingview-embed';

const MyStockMarket = () => {
  const widgetProps = {
    width: "100%",
    height: 600,
    symbol: "FX:EURUSD",
    interval: "D",
    timezone: "Etc/UTC",
    theme: "Light",
    style: "1",
    locale: "en",
    toolbar_bg: "#f1f3f6",
    enable_publishing: false,
    hide_side_toolbar: false,
    allow_symbol_change: true,
    hideideas: true,
  };

  return <StockMarket widgetProps={widgetProps} />;
};

export default MyStockMarket;
