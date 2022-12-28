import React from "react";
import { AdvancedChart } from "react-tradingview-embed";

const AdvancedChartComp = () => {
  return (
    <AdvancedChart
      widgetProps={{
        interval: "1D",
        colorTheme: "dark",
        width: "100%",
        symbol: "BTCUSDT",
        studies: [
          "MACD@tv-basicstudies",
          "StochasticRSI@tv-basicstudies",
          "TripleEMA@tv-basicstudies",
        ],
      }}
    />
  );
};

export default AdvancedChartComp;
