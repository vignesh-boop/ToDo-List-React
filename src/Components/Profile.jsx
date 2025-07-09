import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

export default function Profile() {
  return (
    <>
    <Box display={'flex'} flexDirection={'column'} gap={'20px'} alignItems={'center'}>
      <Typography variant="h3">This is Profile Page</Typography>
      <Box borderRadius={"50px"} width={'100px'} height={"100px"} bgcolor={"grey"} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        V
      </Box>
      <Typography variant="h5">Hello Vignesh</Typography>
    </Box>

    </>
  );
}
