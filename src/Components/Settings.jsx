import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import React from 'react'

export default function Settings() {
  return (
    <>
    <Box marginLeft={"300px"} marginTop={"100px"} display={"flex"} flexDirection={"column"} gap={"20px"}> 

        <Typography variant='h4'>
            Settings Page
        </Typography>
        
          <Box width={"250px"} height={'175x'} bgcolor={"gray"} color={"white"} display={"flex"} flexDirection={"column"} gap={"10px"} padding={"20px"} borderRadius={"20px"}>
              <Typography variant='h6'>Notification</Typography>
              <Typography variant='p'>Email Notification</Typography>
              <Typography variant='p'>Push Notification</Typography>
              <Typography variant='p'> SMS Notification</Typography>
          </Box>
          <Box width={"250px"} height={'140px'} bgcolor={"gray"} color={"white"} display={"flex"} flexDirection={"column"} gap={"10px"} padding={"20px"} borderRadius={"20px"}>
              <Typography variant='h6'>Privacy Settings</Typography>
              <Typography variant='p'>Make Profile Public</Typography>
              <Typography variant='p'>Allow search engine to index</Typography>
          </Box>
          <Button variant='contained'>SAVE CHANGES</Button>
    </Box>
        
    </>
  )
}
