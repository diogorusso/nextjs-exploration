import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
    maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [1, 2, 3, 4, 5, 6, 7], // hardcoded data values
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Dataset 2",
      data: [8, 9, 10, 11, 12, 13, 14], // hardcoded data values
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "Dataset 3",
      data: [15, 16, 17, 18, 19, 20, 21], // hardcoded data values
      backgroundColor: "rgb(53, 162, 235)",
    },
  ],
};

const UsersChart = () => {
  return (
      <div className="p-4 bg-white rounded-lg shadow-md h-[300px]">
        <Bar data={data} options={options} /> 
      </div>
  );
};

export default UsersChart;