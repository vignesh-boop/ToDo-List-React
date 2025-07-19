import React, { useContext } from 'react'
import { Profilechip, ProfileContainer, ProfileWrapper, UserImage } from '../../Styles/profile'
import { Typography } from '@mui/material'
import { AppContext } from './Root'
import men from '/src/asserts/subsidy/men.jpg'
import women from '/src/asserts/subsidy/women.jpg'

export default function Profile() {
    const{userDetails}=useContext(AppContext);
    console.log(userDetails?.name);
  return (
    <>
    <ProfileContainer>
        <ProfileWrapper>
            <UserImage src={userDetails?.gender =='male'?men:women}/>
            <Typography fontSize='20px' fontWeight={600}>
                My Profile
            </Typography>
            <Profilechip>Name :{userDetails?.name}</Profilechip>
            <Profilechip>Age :{userDetails?.age}</Profilechip>
            <Profilechip>Location :{userDetails?.location}</Profilechip>
            <Profilechip>Gender :{userDetails?.gender}</Profilechip>
            <Profilechip>Annual Income :{userDetails?.income}</Profilechip>
        </ProfileWrapper>
    </ProfileContainer>
    </>
  )
}
