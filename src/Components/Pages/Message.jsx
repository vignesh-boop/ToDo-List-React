import React, { useContext } from 'react'
import { MessageContainer, MessageText, Ticking } from '../../Styles/message'
import { Box, Typography } from '@mui/material'
import { AppContext } from './Root'
import { messageData } from '../../constrains/message';
import tick from '/src/asserts/subsidy/tick.png'

export default function Message() {
    const{userDetails,selectedResult}=useContext(AppContext);
  return (
    <>
   <MessageContainer>
    <Ticking src={tick} alt='Tic Image'/>
    <Typography fontSize='30px' fontWeight={700}>
        ThankYou {userDetails?.name} !
    </Typography>
    {/* <Box>
        {Object.keys(selectedResult)?.map((selected,index)=>selectedResult?.[selected]&&(
            <MessageText key={index}>{messageData?.[selected]}</MessageText>
        ),)};
    </Box>
     */}
    <MessageText>
        Thankyou for your submission! we are processing your Eligibility details.
    </MessageText>
    <MessageText>
        You will receve the conformation shortly.If you have any quries ,fell free to contact us.
    </MessageText>
    </MessageContainer> 
    </>
  )
}
