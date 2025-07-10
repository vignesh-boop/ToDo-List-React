import { Box, Button, Paper, styled, Typography } from '@mui/material';
import React from 'react'
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
  width:'400px',
  textAlign:'center'
});

export default function DashBoardPage({logout}) {
    const navigate = useNavigate();
    const handleLogout =()=>{
        logout();
        navigate('/');
    };

  return (
    <>
        <Container>
            <StyledPaper elevation={3}>
                <Typography variant='h4' gutterBottom>
                        Welcome to DashBoard
                </Typography>
                <Typography variant='body1' mb={2}>
                        This page is protected
                </Typography>
                <Button variant='contained' color='primary' onClick={handleLogout}>
                        Logout
                </Button>
            </StyledPaper>
        </Container>
    </>
  )
}
