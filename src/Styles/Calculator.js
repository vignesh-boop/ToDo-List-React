import { Box, Button, styled } from '@mui/material';

import React from 'react'

export const Container = styled(Box)({
maxWidth: "400px",
margin: "80px auto",
padding: "20px",
backgroundColor: "#fff",
borderRadius: "10px",
boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
textAlign: "center",

});

export const Heading = styled("h2")({
     fontsize: "1.5rem",
marginBottom: "20px",
});

export const InputGroup = styled(Box)({
display: "flex",
flexDirection: "column",
gap: "15px",
marginBottom: "15px",
});

export const ButtonGroup = styled(Box)({
marginTop: "10px",
display: "flex",
justifyContent: "center",
gap: "10px",
});

export const ActionButton = styled(Button)({
padding: "10px 15px",
fontSize: "1rem",
border: "none",
borderRadius: "5px",
cursor: "pointer",
backgroundColor: "#007bff",
color: "white",

"&:hover": {
backgroundColor: "#0056b3",
}
});