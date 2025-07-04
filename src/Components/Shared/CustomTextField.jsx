import { TextField } from '@mui/material'
import React from 'react'

export default function CustomTextField({label,type,onChange=()=>{},value,disabled}) {

  return (
    <>
    <TextField
    label={label}
    type={type}
    onChange={(e)=>onChange(e?.target?.value)}
    value={value}
    disabled={disabled}
    fullWidth
    />
    </>
  )
}
