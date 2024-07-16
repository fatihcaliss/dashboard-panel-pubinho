import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
  endpoints: (builder) => ({
    getTable1Data: builder.query({
      query: () => "table1",
    }),
    getTable2Data: builder.query({
      query: () => "table2",
    }),
    getChart1Data: builder.query({
      query: () => "chart1",
    }),
    getChart2Data: builder.query({
      query: () => "chart2",
    }),
  }),
});

export const {
  useGetTable1DataQuery,
  useGetTable2DataQuery,
  useGetChart1DataQuery,
  useGetChart2DataQuery,
} = api;
