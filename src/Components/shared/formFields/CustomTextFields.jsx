import { styled, TextField } from '@mui/material'
import React from 'react'


const StyledTextField = styled(TextField)({
    marginTop:'16px',
})
export default function CustomTextFields( {label , value ,onChange ,type = "text"}) {
  return (
    <>
    <StyledTextField
    label={label}
    variant='outlined'
    fullWidth
    type={type}
    value={value}
    onChange={onChange}
    />
    </>
  )
}
