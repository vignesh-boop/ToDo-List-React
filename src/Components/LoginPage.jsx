import React, { useState } from 'react'
import {Box, Button, Paper, styled, TextField, Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Container = styled(Box)({
        height:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
});

const StyledPaper = styled(Paper)({
        width:'300px',    
        textAlign:'center',
        padding:'20px'
});




export default function LoginPage({login}) {
    const navigate = useNavigate();

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    function validation(){
       

if(email == 'vig@gmail.com' && password=='123'){
        login();
        navigate('/dashboard');
    }else{
        alert("Enter valid user name and password");
    }
};

    
  return (
    <>
        <Container>
            <StyledPaper elevation={3}>
                    <Typography variant='h4' gutterBottom margin={'normal'}> User Login</Typography>
                    <TextField label='Email' type='email'fullWidth margin={'normal'} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <TextField label='Password' type='password'fullWidth margin={'normal'} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <Button variant='contained' color='primary'onClick={validation}>Login</Button>
            </StyledPaper>
        </Container>
    </>
  )
}
