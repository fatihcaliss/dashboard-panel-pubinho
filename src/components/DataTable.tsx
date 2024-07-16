import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetTable1DataQuery } from "../services/api";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "age", headerName: "Age", width: 110 },
];

const DataTable: React.FC = () => {
  const { data, error, isLoading } = useGetTable1DataQuery("");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={data} columns={columns} autoPageSize checkboxSelection />
    </div>
  );
};

export default DataTable;
