import { Button, Container, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '../../router/routePath';

export default function Home() {

    const userDetails = useSelector((state)=>state.user);
    const navigate = useNavigate();
    const isSigin = userDetails?.userName && userDetails?.mobileNumber;
    console.log(userDetails);
  return (
    <>
    <Container sx={{marginTop:'4px', textAlign:'center'}}>
        <Typography variant='h3'>Welcome to Carrier Path Editor</Typography>
        {isSigin?(
            <Typography>Welcome {userDetails.userName} ! We glade to have you here</Typography>
        ):(
            <Typography>Click the following sigin button to know about the Carrier Path Editor</Typography>
        )}

        <Button 
        color='secondary'
        variant='contained'
        sx={{mt:3}}
        onClick={()=>navigate(isSigin?ROUTE_PATH.courses:ROUTE_PATH.sigIn)}
        >
            {isSigin?'Go to Courses':'sigin'}
        </Button>
    </Container>
    </>
  )
}
