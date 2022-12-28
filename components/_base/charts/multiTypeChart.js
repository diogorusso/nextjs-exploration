import React from 'react';
import { Chart } from 'react-chartjs-2';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      type: 'line' ,
      label: 'Dataset 1',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: [-1000, -500, 0, 500, 1000, 1500, 2000],
    },
    {
      type: 'bar' ,
      label: 'Dataset 2',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [-2000, -1500, -1000, -500, 0, 500, 1000],
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar' ,
      label: 'Dataset 3',
      backgroundColor: 'rgb(53, 162, 235)',
      data: [-3000, -2500, -2000, -1500, -1000, -500, 0],
    },
  ],
};

export default function ChartComponent() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md h-[300px]">
      <Chart type='bar' data={data} />
    </div>
  );
}
