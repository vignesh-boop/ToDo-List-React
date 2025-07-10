import React, { useState } from 'react'
import {Box, Button, Paper, styled, TextField, Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Container = styled(Box)({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    minHeight:'100vh',
    backgroundColor:'#f5f5f5'
})

const StyledPaper = styled(Paper)({
  padding:'32px',
  width:'300px',
  textAlign:'center'
});


export default function LoginPage({login}) {

  const [userId,setUserId] = useState();
  const[password,setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = ()=>{
    if(userId == "user" && password == "user"){
      login();
      navigate('/dashboard');
    }else{
      alert("Enter valid email and Password");
    }
  };

  return (
    <>
        <Container>
          <StyledPaper elevation={3}>
            <Typography variant='h5'  gutterBottom>
                  Login
            </Typography>

              <TextField label='UserId' fullWidth margin='normal' value={userId} onChange={(e)=>setUserId(e.target.value)}/>
              <TextField label='Password' fullWidth margin='normal' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <Button variant='contained' color='primary' fullWidth sx={{mt:2}}onClick={handleLogin}>
                Login
          </Button>
          </StyledPaper>
        </Container>
    </>
  )
}
