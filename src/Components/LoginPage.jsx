import React, { useState } from 'react'
import {styled,Box, Paper, Typography, TextField, Button, Backdrop} from '@mui/material'
import { useNavigate } from 'react-router-dom';


// Styling the container
const Container = styled(Box)({
    height:"100vh",
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
});

// Styling the paper
const StyledPaper = styled(Paper)({
    width:'600px',
    padding:'50px',
    textAlign:'center',
    borderRadius:'10px'
});




export default function LoginPage({setIsAuthenticated}) {

  const navigate = useNavigate();

function login(){
  setIsAuthenticated(true);
  navigate('/dashboard');
}
function logout(){
  setIsAuthenticated(false);
}

  const[userName,setUserName]=useState();
  const[password,setPassword]=useState();

  function validation(){
      if(userName=='vignesh'&& password=='123'){
        login();
      }else{
        alert("Enter Valid UserName and Password");
      };
  }
  
  return (
    <>
    <Container>
        <StyledPaper elevation={5}>
            <Box padding='10px' width={'210px'} bgcolor='gray' borderRadius='5px' position={'absolute'} top={'8.5rem'}color='white'>ECOMMERSE LOGIN</Box>
            <Typography variant='h4' gutterBottom>User Login</Typography>
            <TextField label='User Name' contained='outlined' margin='normal' fullWidth value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            <TextField label='Password' contained='outlined' margin='normal' padding='normal' type='password' fullWidth value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <Button variant='contained' color='secondary' sx={{marginTop:'20px'}}onClick={validation} >SUBMIT</Button>
        </StyledPaper>
    </Container>
    </>
  )
}
