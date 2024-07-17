import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
  endpoints: (builder) => ({
    getTable1Data: builder.query({
      query: ({ filterModel }) => {
        let queryStr = "table1";
        if (filterModel && filterModel.items.length > 0) {
          const filterParams = filterModel.items
            .map(
              (filter: any) =>
                filter.value &&
                `${
                  filter.field === "name" ? "name_like" : filter.field
                }=${encodeURIComponent(filter.value)}`
            )
            .join("&");
          queryStr += `?${filterParams}`;
        }
        return queryStr;
      },
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
  useLazyGetTable1DataQuery,
  useGetTable1DataQuery,
  useGetTable2DataQuery,
  useGetChart1DataQuery,
  useGetChart2DataQuery,
} = api;
