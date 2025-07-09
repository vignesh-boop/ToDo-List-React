import React from "react";
import { styled, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f5f5f5",
  padding: "16px",
  textAlign: "center",
});

const StyledButton = styled(Button)({
  marginTop: "16px",
});

export default function Home() {
  return (
    <>
      <Container>
        <Typography variant="h4" color="primary">
          Welcome to Nested Routing home page
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Click below to navigate to your dash board
        </Typography>

        <StyledButton
          variant="contained"
          color="primary"
          component={Link}
          to="dashboard"
          
        >
          Go to DashBoard
        </StyledButton>
      </Container>
    </>
  );
}
