import React, { useContext } from 'react'
import { Logo, LogoContainer, NavContainer, NavProfile, PathSpan, ProfileIcon } from '../../Styles/navBar'
import { Box, Typography } from '@mui/material'
import { AppContext } from './Root'
import { useNavigate } from 'react-router-dom'
import { routePath } from '../../routes/routePath'
import userIcon from '/src/asserts/subsidy/userIcon.png'
import education from '/src/asserts/subsidy/education.jpg'

export default function NavBar() {

  const navigate = useNavigate();
  const {userDetails} = useContext(AppContext);
  return (
    <>
    <NavContainer>
        <LogoContainer>
            <Logo src={education} alt='logo' sx={{borderRadius:'50%'}} onClick={()=>navigate(routePath.home)}/>
            <Typography>
                Carrier <PathSpan>Path</PathSpan> Editor
            </Typography>
        </LogoContainer>
        <NavProfile>
          <Box>{userDetails?.name?.toUpperCase()}</Box>
            <ProfileIcon onClick={()=>navigate(routePath.profile)}>
              <Logo src={userIcon}/>
            </ProfileIcon>
        </NavProfile>
    </NavContainer>
    </>
  )
}
