import { AppBar, Box, Button, Checkbox, FormControlLabel, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'

import { Outlet, useNavigate } from 'react-router-dom';



export default function ProductPage() {
  const navigate = useNavigate();

  return (
    <>
  
    <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome to React E-commerce Shopping Mart
        </Typography>
        <Button color='white' onClick={()=>navigate('/dashboard/items')}>Items</Button>
        <Button color='white'onClick={()=>navigate('/')}>Logout</Button>
        <Button color='white' onClick={()=>navigate('/dashboard/cart')}>Icon</Button>
        </Toolbar>
      </AppBar>    
        <Outlet/>

    </>
  )
}


