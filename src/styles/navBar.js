import { Box, styled } from "@mui/material";

export const NavBarr = styled (Box)({
display: "flex",
justifyContent: "space-between",
alignItems: "center",
width: "100%",
backgroundColor: "#365279",
color: "#faebd7",
padding: "5px 10px",
});

export const LogoContainer = styled (Box)({
display: "flex",
gap: "5px",
alignItems: "center",
fontSize: "18px",
color: "#fff",
fontWeight: "bold",
});

export const Logo = styled("img")({
height: "45px",
width: "45px",
borderRadius:'50%',
});