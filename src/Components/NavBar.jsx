import { height } from '@fortawesome/free-solid-svg-icons/fa0'
import {Button,Box} from '@mui/material'; 
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();
  return (
    <>
    
    <Box sx={{
        height:"60px",
        width:"100%",
        backgroundColor:"blue",
        display:"flex",
        gap:"50px"

    }}>
        <Button sx={{color:"white"}} onClick={()=>navigate("/home")}>Home</Button>
        <Button sx={{color:"white"}}onClick={()=>navigate('/about')}>About</Button>
        <Button sx={{color:"white"}} onClick={()=>navigate('/contact')}>Contact</Button>

    </Box>
    </>
  )
}
