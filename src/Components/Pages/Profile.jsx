import { Box, Container, Paper, styled, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';

const StyledContainer = styled (Container) ({
marginTop: "48px",
});

const StyledPaper = styled (Paper)({
padding: "24px",
borderRadius: "8px",
boxShadow: " 0px 0px 3px 3px #ccc",
});


const StyledMessageContainer = styled (Container)({
marginTop: "32px",
});

const StyledTitle = styled (Typography) ({
fontWeight: "bold",
color: "#1976d2",
});

const StyledHeading = styled (Typography) ({
fontWeight: "bold",
});

export default function Profile() {

    const userDetails = useSelector((state)=>state.user);
    const isSigin = userDetails?.userName && userDetails?.mobileNumber;

  return (
    <>
    <StyledContainer sx={{maxWidth:'sm'}}>

    {isSigin?(
        <StyledPaper>
            <StyledTitle variant='h4' align='center' sx={{mb:3}}>User Profile</StyledTitle>
            <Box sx={{mb:2}}>
                <StyledHeading variant='h6'> Name : {userDetails?.userName}</StyledHeading>
            </Box>
            <Box sx={{mb:2}}>
                <StyledHeading variant='h6'> Mobile Number : {userDetails?.mobileNumber}</StyledHeading>
            </Box>
        </StyledPaper>
    ):(
        <StyledMessageContainer>
            <StyledTitle variant="h4" align="center">Please sigin to view your profile </StyledTitle>
        </StyledMessageContainer>
    )}
    </StyledContainer>
    </>
  )
}
