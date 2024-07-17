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
          padding: {
            xs: "40px 20px 0 20px", // mobile devices
            sm: "60px 40px 0 40px", // small devices
            md: "80px 60px 0 60px", // medium devices
            lg: "80px 120px 0 120px", // large devices
          },
        }}
      >
        <Box padding={2}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
