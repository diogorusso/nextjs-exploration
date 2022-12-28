import React from 'react';
import { ForexHeatMap } from 'react-tradingview-embed';

const MyForexHeatMap = () => {
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
    show_popup_button: true,
    popup_width: "1000",
    popup_height: "650",
  };

  return <ForexHeatMap widgetProps={widgetProps} />;
};

export default MyForexHeatMap;
