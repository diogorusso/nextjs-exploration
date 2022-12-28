import React, { useState } from "react";
import { Line } from "react-chartjs-2";
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
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
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
  responsive: true,
  plugins: {
    legend: {
      display: false,
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
        <Line data={data} options={options} />
      </div>
  );
};

export default UsersChart;
