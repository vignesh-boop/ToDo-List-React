import { Box, styled, Typography } from "@mui/material";

export const MessageContainer = styled (Box)({
display: "flex",
flexDirection: "column",
alignItems: "center",
gap: "15px",
justifyContent: "center",
margin: "30px 0px",
});


export const Ticking =styled("img")({
height: "auto",
width: "300px",
});

export const MessageText = styled (Typography)({
fontSize: "24px",
fontWeight: 500,
});

export const subsidyResult = styled (Box)({
display: "flex",
justifyContent: "center",
gap: "10px",
});