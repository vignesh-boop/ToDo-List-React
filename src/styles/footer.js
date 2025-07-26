import { Box, styled, Typography } from "@mui/material";


export const FooterContainer = styled (Box)({
display: "flex",
justifyContent: "space-between",
alignItems: "center",
padding: "15px 10px",
width: "100%",
backgroundColor: "#365279"
});


export const Objective = styled (Typography)({
color: "#0e0c0bff"
});

export const Author = styled (Typography)({
color: "#fff",
fontWeight: "bold",
});