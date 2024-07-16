import React from "react";
import { Box, Typography } from "@mui/material";
import Chart1 from "../components/charts/Chart1";
import Chart2 from "../components/charts/Chart2";

const Charts: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Chart Section
      </Typography>
      <Box marginY={2}>
        <Chart1 />
      </Box>
      <Box marginY={2}>
        <Chart2 />
      </Box>
    </Box>
  );
};

export default Charts;
