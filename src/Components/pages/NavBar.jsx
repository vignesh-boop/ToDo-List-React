import React, { useEffect, useState } from 'react'
import { Logo, LogoContainer,NavBarr } from '../../styles/navBar';
import PORTFOLIO_PIC from '../../asserts/PORTFOLIO_PIC.png';
import { Typography } from '@mui/material';
import { PathSpan } from '../../styles/common';

export const NavBar = () => {

    const[currentDateTime , setCurrentDateTime]=useState("");
    const updateDateTime = ()=>{
        setCurrentDateTime(new Date().toLocaleString());
    }

    useEffect(()=>{
        updateDateTime();
        const timeInterval = setInterval(updateDateTime,1000);
        return ()=> clearInterval(timeInterval);
    },[]);

  return (
    <>
    <NavBarr>
        <LogoContainer>
            <Logo src={PORTFOLIO_PIC}/>
        <Typography variant='h6'>Carrier <PathSpan>Path</PathSpan> Editor</Typography>
        </LogoContainer>
        <Typography variant='h5'>Todo-List</Typography>
        <Typography variant='h6'>{currentDateTime}</Typography>
    </NavBarr>
    </>
  )
}
