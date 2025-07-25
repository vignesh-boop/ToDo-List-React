import { Box, Button, Container, styled, Typography } from '@mui/material';
import React, { useState } from 'react'
import CustomTextFields from '../shared/formFields/CustomTextFields';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '../../router/routePath';

const SignInContainer =styled (Container) ({
width: "600px",
marginTop: "48px",
padding: "24px",
backgroundColor: "#fff",
boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.1)",
borderRadius: "8px",
});

const Title = styled (Typography) ({
fontWeight: "bold",
color: "#1976d2",
textAlign: "center",
});

const ButtonContainer = styled (Box)({
display: "flex",
justifyContent: "center",
marginTop: "16px",
});

const StyledButton = styled (Button) ({
width: "60%",
height: "40px",
borderRadius: "10px",
fontWeight: "bold",
textTransform: "none",
});

export default function SigIn() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSigin = ()=>{
        if(userName && mobileNumber){
            dispatch(setUser({userName,mobileNumber}));
            navigate(ROUTE_PATH.home);
        }else{
            alert("Plese fill the Input Field")
        }

    }

    const [userName,setUserName]=useState("");
    const [mobileNumber,setMobileNumber]=useState("");

  return (
    <>
   <SignInContainer>
    <Title variant='h5'> Sign In</Title>
    <CustomTextFields
    label='UserName'
    value={userName}
    onChange={(e)=>setUserName(e.target.value)}
    />
    <CustomTextFields
    label='MobileNumber'
    value={mobileNumber}
    onChange={(e)=>setMobileNumber(e.target.value)}
    />
    <ButtonContainer>
        <StyledButton type='submit' variant='contained' color='primary' onClick={handleSigin}>
            SigIn
        </StyledButton>
    </ButtonContainer>
    </SignInContainer> 
    </>
  )
}
