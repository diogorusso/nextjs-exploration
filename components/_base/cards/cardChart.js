import React, { useEffect, useRef, useState } from "react";
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
  // animations: {
  //     tension: {
  //       duration: 1000,
  //       easing: 'linear',
  //       from: 1,
  //       to: 0,
  //       loop: true
  //     }
  //   },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    //   tooltips: {
    //     enabled: true,
    //   },
  },

  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    // x: {
    //   grid: {
    //     display: false
    //   }
    // },
    // y: {
    //   grid: {
    //     display: false
    //   }
    // }
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
};

const UsersChart = () => {
  const [userData, setUserData] = useState([3, 682, 57.1]); // You can get this data from your application state or an API call
  //   const chartContainer = useRef(null);

  //   useEffect(() => {
  //     // You can update the state with new data here, for example:
  //     // setUserData([4,682, 47.1]);
  //   }, []);

  return (
    <div className="mb-4 rounded-lg shadow-sm">
      <div className="relative overflow-hidden bg-white rounded-lg shadow-lg md:shadow-xl">
        <div className="relative z-10 px-3 pt-8 pb-10 text-center">
          <h4 className="text-sm leading-tight text-gray-500 uppercase">
            Users
          </h4>
          <h3 className="my-3 text-3xl font-semibold leading-tight text-gray-700">
            {userData[0]}
          </h3>
          <p className="text-xs leading-tight text-green-500">
            ▲ {userData[1]}%
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default UsersChart;
