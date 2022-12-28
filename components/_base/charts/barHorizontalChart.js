import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  BarElement
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  BarElement
);

const data = {
  labels: [1, 2, 2, 3, 5, 4, 7],
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: [1, 2, 2, 3, 5, 4, 7],
      borderColor: "lightblue",
      backgroundColor: "rgba(53, 162, 235, 0.15)",
      lineTension: 0.5,
    },
  ],
};

const options = {
    maintainAspectRatio: false,
  indexAxis: 'y',
  plugins: {
    legend: {
      display: true, // set to true to make legend visible
    },
  },

  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    x: {
      display: true,
    },
    y: {
      display: true,
    },
  },
};

const UsersChart = () => {
  return (
      <div className="p-4 bg-white rounded-lg shadow-md h-[300px]">
        <Bar data={data} options={options} /> 
      </div>
  );
};

export default UsersChart;