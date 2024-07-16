import React from "react";
import NavBar from "./NavBar";
import { Box } from "@mui/material";
import Sidebar from "./SideBar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box display="flex" height="100vh">
      <Box
        component="nav"
        sx={{
          width: 80,
          flexShrink: 0,
        }}
      >
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        <NavBar />
        <Box padding={2}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
