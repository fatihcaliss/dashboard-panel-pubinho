import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const getLinkStyle = (path: string) => {
    return {
      textDecoration: "none",
      color: location.pathname === path ? "blue" : "black",
      fontWeight: location.pathname === path ? "bold" : "normal",
      backgroundColor: location.pathname === path ? "#e0e0e0" : "transparent",
      borderRadius: "4px",
    };
  };

  return (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem component={Link} to="/tables" style={getLinkStyle("/tables")}>
        <ListItemText primary="Tables" />
      </ListItem>
      <ListItem component={Link} to="/charts" style={getLinkStyle("/charts")}>
        <ListItemText primary="Charts" />
      </ListItem>
    </List>
  );
};

export default Sidebar;
