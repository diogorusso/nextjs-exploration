import React, { useRef, useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const colors = [
  'red',
  'orange',
  'yellow',
  'lime',
  'green',
  'teal',
  'blue',
  'purple',
];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [-1000, -500, 0, 500, 1000, 1500, 2000],
    },
    {
      label: 'Dataset 2',
      data: [-2000, -1500, -1000, -500, 0, 500, 1000],
    },
  ],
};

function createGradient(ctx, area) {
  const colorStart = colors[Math.floor(Math.random() * colors.length)];
  const colorMid = colors.find(color => color !== colorStart);
  const colorEnd = colors.find(color => color !== colorStart && color !== colorMid);

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(0.5, colorMid);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}

export default function ChartComponent() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map(dataset => ({
        ...dataset,
        borderColor: createGradient(chart.ctx, chart.chartArea),
      })),
    };

    setChartData(chartData);
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md h-[300px]">
       <Chart ref={chartRef} type='line' data={chartData} />
    </div>
  );
}

