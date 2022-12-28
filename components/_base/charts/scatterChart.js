import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const data = {
  datasets: [
    {
      label: 'A dataset',
      data: [
        { x: -10, y: 0 },
        { x: -5, y: 5 },
        { x: 0, y: 10 },
        { x: 5, y: 15 },
        { x: 10, y: 20 },
      ],
      backgroundColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

function Chart() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md h-[300px]">
      <Scatter options={options} data={data} />
    </div>
  );
}

export default Chart;
