import Layout from "../../layouts/Base";
import dynamic from "next/dynamic";

const AdvancedChart = dynamic(
    () => import("../../components/_base/tradingView/advancedChart"),
    {
      ssr: false,
    }
  );
  const TickerTape = dynamic(
    () => import("../../components/_base/tradingView/tickerTape"),
    {
      ssr: false,
    }
  );
  const CompanyProfile = dynamic(
    () => import("../../components/_base/tradingView/companyProfile"),
    {
      ssr: false,
    }
  );
  
  const MarketOverview = dynamic(
    () => import("../../components/_base/tradingView/marketOverview"),
    {
      ssr: false,
    }
  );
  
  const CryptoCurrencyMarket = dynamic(
    () => import("../../components/_base/tradingView/cryptoCurrencyMarket"),
    {
      ssr: false,
    }
  );
  const EconomicCalendar = dynamic(
    () => import("../../components/_base/tradingView/economicCalendar"),
    {
      ssr: false,
    }
  );
  const ForexCrossRates = dynamic(
    () => import("../../components/_base/tradingView/forexCrossRates"),
    {
      ssr: false,
    }
  );
  const ForexHeatMap = dynamic(
    () => import("../../components/_base/tradingView/forexHeatMap"),
    {
      ssr: false,
    }
  );
  const FundamentalData = dynamic(
    () => import("../../components/_base/tradingView/fundamentalData"),
    {
      ssr: false,
    }
  );
  const MarketData = dynamic(
    () => import("../../components/_base/tradingView/marketData"),
    {
      ssr: false,
    }
  );
  
  const MiniChart = dynamic(() => import("../../components/_base/tradingView/miniChart"), {
    ssr: false,
  });
  const Screener = dynamic(() => import("../../components/_base/tradingView/screener"), {
    ssr: false,
  });
  const SingleTicker = dynamic(
    () => import("../../components/_base/tradingView/singleTicker"),
    {
      ssr: false,
    }
  );
  const StockMarket = dynamic(
    () => import("../../components/_base/tradingView/stockMarket"),
    {
      ssr: false,
    }
  );
  const SymbolInfo = dynamic(
    () => import("../../components/_base/tradingView/symbolInfo"),
    {
      ssr: false,
    }
  );
  const SymbolOverview = dynamic(
    () => import("../../components/_base/tradingView/symbolOverview"),
    {
      ssr: false,
    }
  );
  
  const TechnicalAnalysis = dynamic(
    () => import("../../components/_base/tradingView/technicalAnalysis"),
    {
      ssr: false,
    }
  );
  const Ticker = dynamic(() => import("../../components/_base/tradingView/ticker"), {
    ssr: false,
  });
  const Timeline = dynamic(() => import("../../components/_base/tradingView/timeline"), {
    ssr: false,
  });


  export default function TradingView() {
    return(<Layout>
<TickerTape />
      <div className="grid grid-cols-2 gap-4 p-4">
        <AdvancedChart />
        <CompanyProfile />
        <MarketOverview />
        <CryptoCurrencyMarket />
        <EconomicCalendar />
        <ForexCrossRates />
        <ForexHeatMap />
        <FundamentalData />
        <MarketData />
        <MiniChart />
        <Screener />
        <SingleTicker />
        <StockMarket />
        <SymbolInfo />
        <SymbolOverview />
        <TechnicalAnalysis />
        <Ticker />
        <Timeline />
      </div>
      </Layout>
    )
}