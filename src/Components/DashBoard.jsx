import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'



export default function DashBoard({logout}) {

  return (
    <>
     <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
        Carrier Path Editor
          </Typography>

          <Button color='white'>Settings</Button>
          <Button color='white'>Profile</Button>
          <Button variant='contained' color='secondary' onClick={logout}>Logout</Button>
          
        </Toolbar>
      </AppBar>
 
    
    </>
  )
}
