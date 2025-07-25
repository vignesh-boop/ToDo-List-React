import React, { useRef, useState } from 'react'
import {AppBar,Typography,Toolbar,Menu, MenuItem, Button} from '@mui/material'
import ROUTE_PATH from '../../router/routePath';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../redux/userSlice';
import PORTFOLIO_PIC from '../../asserts/PORTFOLIO_PIC.png'




export default function NavBar() {
  const dispatch = useDispatch();

  const userName = useSelector((state)=>state.user.userName);

  const navigate = useNavigate();

  const[open,setOpen]=useState(false);
  const anchorRef = useRef(null);
  const handleToggle = ()=>{
    setOpen((pre)=>!pre);
  }

  const handleSignOut=()=>{
    dispatch(clearUser());
    handleClose();
    navigate(ROUTE_PATH.home);
  }

  const handleClose=()=>{
    setOpen(false);
  }

  const menuItems =[
    {
    label: 'COURSES',
    path:ROUTE_PATH.courses
    },
    {
    label: 'PROFILE',
    path:ROUTE_PATH.profile
    },
    {
    label: 'SIGIN',
    path:ROUTE_PATH.sigIn
    }
  ]


  return (
    <>
   <AppBar position="fixed">
<Toolbar>

<Typography
  sx={{
    width: "75px",
    height: "70px",
    cursor: "pointer",
    borderRadius:'50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 'auto' // pushes the rest of the content to the right
  }}
>
  <img
    src={PORTFOLIO_PIC}
    alt="Logo"
    style={{
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain",
      borderRadius:'50%',
    }}
  />
</Typography>
<Toolbar>

{menuItems.map(({label,path})=>(
  <Button key={label} color='inherit' onClick={()=>navigate(path)}>{label}</Button>
))}
</Toolbar>


<Typography
variant="h6"
sx={{ width: "100px", textAlign: "end", cursor: "pointer"}}
onClick ={handleToggle}
ref={anchorRef}
>
{userName?userName:"Guest"}
</Typography>

<Menu  open={open} onClose={handleToggle} anchorEl={anchorRef.current}>
<MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
</Menu>

</Toolbar>
</AppBar>
    </>
  )
}
