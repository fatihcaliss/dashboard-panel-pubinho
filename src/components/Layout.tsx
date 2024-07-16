import React from "react";
import NavBar from "./NavBar";
import { Box } from "@mui/material";
import Sidebar from "./SideBar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box display="flex" height="100vh">
      <Sidebar open={open} toggleDrawer={toggleDrawer} />

      <NavBar open={open} toggleDrawer={toggleDrawer} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        <Box padding={2}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
