import React from "react";
import { Ticker} from "react-tradingview-embed";

const MyTechnicalAnalysis = () => {
  const widgetProps = {
    symbols: [
      {
        proName: "FOREXCOM:SPXUSD",
        title: "S&P 500",
      },
      {
        proName: "FOREXCOM:NSXUSD",
        title: "US 100",
      },
      {
        proName: "FX_IDC:EURUSD",
        title: "EUR/USD",
      },
      {
        proName: "BITSTAMP:BTCUSD",
        title: "Bitcoin",
      },
      {
        proName: "BITSTAMP:ETHUSD",
        title: "Ethereum",
      },
    ],
    colorTheme: "dark",
    isTransparent: false,
    showSymbolLogo: true,
    locale: "en",
  };

  return <Ticker widgetProps={widgetProps} />;
};

export default MyTechnicalAnalysis;
