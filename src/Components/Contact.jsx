import { Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Contact() {
  const navigate = useNavigate();
  return (
    <>
    <Typography variant='p' component='p' sx={{marginTop:"20px"}}>
          you can find as here
        </Typography>
        <p>No 1/148 veambuli amman kovil street</p>
        <p>48 vengadapuram Via SP - kovil </p>
        <p>chengalpattu district </p>
        <p>603402</p>
    
        <Button variant='contained' sx={{margin:'10px'}} onClick={()=>navigate("/")}>Go to DashBoard</Button>
        <Button variant='outlined'color='secondary' onClick={()=>navigate(-1)}>Go Back</Button>
    </>
  )
}
