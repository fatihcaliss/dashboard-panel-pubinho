import React from "react";
import { Box, Typography } from "@mui/material";
import Table1 from "../components/tables/Table1";
import Table2 from "../components/tables/Table2";

const Tables: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Table Section
      </Typography>
      <Box marginY={2}>
        <Table1 />
      </Box>
      <Box marginY={2}>
        <Table2 />
      </Box>
    </Box>
  );
};

export default Tables;
