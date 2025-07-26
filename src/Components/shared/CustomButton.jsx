import { IconButton } from '@mui/material'
import React from 'react'

export default function CustomButton({onclick,disabled,sx,children}) {
  return (
    <>
    <IconButton 
    onclick={onclick}
    disabled={disabled}
    sx={sx}
     >
        {children}
    </IconButton>
    </>
  )
}
