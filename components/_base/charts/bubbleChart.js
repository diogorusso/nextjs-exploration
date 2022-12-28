import React from 'react';
import { Bubble } from 'react-chartjs-2';

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
      label: 'Red dataset',
      data: [
        { x: -100, y: -100, r: 5 },
        { x: -50, y: -50, r: 10 },
        { x: 0, y: 0, r: 15 },
        { x: 50, y: 50, r: 20 },
        { x: 100, y: 100, r: 5 },
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Blue dataset',
      data: [
        { x: -100, y: 100, r: 5 },
        { x: -50, y: 50, r: 10 },
        { x: 0, y: 0, r: 15 },
        { x: 50, y: -50, r: 20 },
        { x: 100, y: -100, r: 5 },
      ],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function ChartComponent() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md h-[300px]">
      <Bubble options={options} data={data} />
    </div>
  );
}
