import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetTable2DataQuery } from "../../services/api";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "city", headerName: "City", width: 150 },
  { field: "population", headerName: "Population", width: 150 },
];

const Table2: React.FC = () => {
  const { data, error, isLoading } = useGetTable2DataQuery("");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={data || []} columns={columns} autoPageSize />
    </div>
  );
};

export default Table2;
