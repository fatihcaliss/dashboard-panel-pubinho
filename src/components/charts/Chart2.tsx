import React from "react";
import Chart from "react-apexcharts";
import { useGetChart2DataQuery } from "../../services/api";

const Chart2: React.FC = () => {
  const { data, error, isLoading } = useGetChart2DataQuery("");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const series = [
    {
      name: "Revenue",
      data: data.map((item: any) => item.revenue),
    },
  ];

  const options = {
    chart: {
      type: "bar" as const, // Set the type property to "bar"
    },
    xaxis: {
      categories: data.map((item: any) => item.month),
    },
  };

  return <Chart options={options} series={series} type="bar" height={350} />;
};

export default Chart2;
