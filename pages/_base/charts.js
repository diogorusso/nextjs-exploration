import Layout from "../../layouts/Base";

import LineChart from "../../components/_base/charts/lineChart";
import LineMultiAxisChart from "../../components/_base/charts/lineMultiAxisChart";
import AreaChart from "../../components/_base/charts/areaChart";
import BarChart from "../../components/_base/charts/barChart";
import BarHorizontalChart from "../../components/_base/charts/barHorizontalChart";
import BarStackedChart from "../../components/_base/charts/barStackedChart";
import BarGroupedChart from "../../components/_base/charts/barGroupedChart";
import PieChart from "../../components/_base/charts/pieChart";
import DoughnutChart from "../../components/_base/charts/doughnutChart";
import PolarChart from "../../components/_base/charts/polarChart";
import RadarChart from "../../components/_base/charts/radarChart";
import ScatterChart from "../../components/_base/charts/scatterChart";
import BubbleChart from "../../components/_base/charts/bubbleChart.js";
import MultiTypeChart from "../../components/_base/charts/multiTypeChart";
import ChartEvents from "../../components/_base/charts/chartEvents";
import ChartGradient from "../../components/_base/charts/chartGradient";

export default function Charts() {
  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4 p-4">
        <LineChart />
        <LineMultiAxisChart />
        <BarChart />
        <BarHorizontalChart />
        <BarStackedChart />
        <BarGroupedChart />
        <AreaChart />
        <PieChart />
        <DoughnutChart />
        <PolarChart />
        <RadarChart />
        <ScatterChart />
        <BubbleChart />
        <MultiTypeChart />
        <ChartEvents />
        <ChartGradient />
      </div>
    </Layout>
  );
}
