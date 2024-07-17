import React, { useState, useEffect } from "react";
import {
  DataGrid,
  GridColDef,
  GridFilterModel,
  GridToolbar,
} from "@mui/x-data-grid";
import { useLazyGetTable1DataQuery } from "../../services/api";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "age", headerName: "Age", width: 150 },
];

const Table1: React.FC = () => {
  const [filterModel, setFilterModel] = useState<GridFilterModel>({
    items: [],
  });
  const [trigger, { data, error, isLoading }] = useLazyGetTable1DataQuery();

  useEffect(() => {
    trigger({ filterModel });
  }, [filterModel, trigger]);

  const handleFilterChange = (newFilterModel: GridFilterModel) => {
    setFilterModel(newFilterModel);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data || []}
        columns={columns}
        autoPageSize
        filterMode="server"
        onFilterModelChange={handleFilterChange}
        filterDebounceMs={500}
        slots={{ toolbar: GridToolbar }}
      />
    </div>
  );
};

export default Table1;
