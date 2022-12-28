import React, { MouseEvent, useRef } from 'react';
import { Chart,getDatasetAtEvent,getElementAtEvent,getElementsAtEvent } from 'react-chartjs-2';

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

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

const printDatasetAtEvent = (dataset) => {
  if (!dataset.length) return;

  const datasetIndex = dataset[0].datasetIndex;

  console.log(data.datasets[datasetIndex].label);
};

const printElementAtEvent = (element) => {
  if (!element.length) return;

  const { datasetIndex, index } = element[0];

  console.log(data.labels[index], data.datasets[datasetIndex].data[index]);
};

const printElementsAtEvent = (elements) => {
  if (!elements.length) return;

  console.log(elements.length);
};

export default function ChartComponent() {
  const chartRef = useRef(null);

  const onClick = (event) => {
    const { current: chart } = chartRef;

    if (!chart) {
      return;
    }

    printDatasetAtEvent(getDatasetAtEvent(chart, event));
    printElementAtEvent(getElementAtEvent(chart, event));
    printElementsAtEvent(getElementsAtEvent(chart, event));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md h-[300px]">
      <Chart
        ref={chartRef}
        type='bar'
        onClick={onClick}
        options={options}
        data={data}
      />
    </div>
  );
}
