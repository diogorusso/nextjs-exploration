import React from 'react';
import { TechnicalAnalysis } from 'react-tradingview-embed';

const MyTechnicalAnalysis = () => {
  const widgetProps = {
    interval: "1m",
    width: 425,
    isTransparent: false,
    height: 450,
    symbol: "NASDAQ:AAPL",
    showIntervalTabs: true,
    locale: "en",
    colorTheme: "dark",
  };

  return <TechnicalAnalysis widgetProps={widgetProps} />;
};

export default MyTechnicalAnalysis;
