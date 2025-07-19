import { TextField } from '@mui/material'
import React from 'react'

export default function CostemTextField({label,type,handleChange,value}) {
  return (
    <>
    <TextField 
    label={label}
    type={type}
    onChange={(e)=>handleChange(e.target.value)}
    value={value}
    fullWidth
    variant='outlined'
    />
    </>
  )
}
