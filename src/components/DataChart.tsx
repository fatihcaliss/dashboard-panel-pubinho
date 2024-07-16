import React from "react";
import Chart from "react-apexcharts";

const DataChart: React.FC = () => {
  const options = {
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: ["John", "Jane", "Michael"],
    },
  };

  const series = [
    {
      name: "Age",
      data: [28, 34, 45],
    },
  ];

  return (
    <div>
      <Chart
        options={{ ...options, chart: { type: "bar" } }}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default DataChart;
