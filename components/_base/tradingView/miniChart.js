import React from 'react';
import { MiniChart } from 'react-tradingview-embed';

const MyMiniChart = () => {
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

  return <MiniChart widgetProps={widgetProps} />;
};

export default MyMiniChart;
