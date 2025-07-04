import { Box, Typography } from '@mui/material'
import React from 'react'


export default function PageNotFound() {
  return (
    <>
    <Box width="100%" height='100vh' bgcolor='black'sx={{ display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center',gap:'20px'}}>
    <Typography variant='h3' component='h1' color='white' fontWeight='900px'>PAGE NOT FOUND</Typography>
    <Typography variant='h4' component='h4' color='white'>404 ERROR</Typography>
    </Box>
    </>
  )
}
