import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import React from "react";

export default function DashBoard() {
  return (
    <>
      <Box>
        <AppBar color="primary" position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              DashBoard
            </Typography>
            <Button color="white" component={Link} to="settings">
              Settings
            </Button>
            <Button color="white" component={Link} to="profile">
              Profile
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{ padding: "2px" }}>
        <Outlet />
      </Box>
    </>
  );
}
