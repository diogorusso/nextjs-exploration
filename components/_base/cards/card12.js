import React from 'react';

const MetricCard = ({ title, value, increase }) => {
  return (
    <div className="space-y-1">
      <div>{title}</div>
      <div className="text-5xl font-thin text-white">{value}</div>
      <div>{increase} increase</div>
    </div>
  );
};


const MetricsGrid = () => {
    return (
      <div className="grid grid-cols-3 gap-8 p-8 text-sm text-gray-300 bg-gray-800 rounded lg:grid-cols-5">
        <MetricCard title="Site uniques" value="928" increase="76 increase" />
        <MetricCard title="Site views" value="1.1k" increase="76 increase" />
        <MetricCard title="Average time on site" value="03:28" increase="76 increase" />
        <MetricCard title="Bounce rate" value="86%" increase="76 increase" />
        <MetricCard title="Goal completions" value="59" increase="76 increase" />
      </div>
    );
  };
  
  export default MetricsGrid;