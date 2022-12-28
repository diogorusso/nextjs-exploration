import React from "react";
import { CompanyProfile } from "react-tradingview-embed";

const AdvancedChartComp = () => {
  return (
    <CompanyProfile
      widgetProps={{
        "symbol":"NASDAQ:AAPL"

      }}
    />
  );
};

export default AdvancedChartComp;
