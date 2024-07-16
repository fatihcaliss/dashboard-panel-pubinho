import React from "react";
import Chart from "react-apexcharts";
import { useGetChart1DataQuery } from "../../services/api";
import { ApexOptions } from "apexcharts";

const Chart1: React.FC = () => {
  const { data, error, isLoading } = useGetChart1DataQuery("");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const series = [
    {
      name: "Sales",
      data: data.map((item: any) => item.sales),
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "line",
    },
    xaxis: {
      categories: data.map((item: any) => item.month),
    },
  };

  return <Chart options={options} series={series} type="line" height={350} />;
};

export default Chart1;
