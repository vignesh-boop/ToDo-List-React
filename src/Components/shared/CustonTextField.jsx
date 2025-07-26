import { TextField } from '@mui/material'
import React from 'react'

export const CustonTextField = ({label,type,handleChange,value}) => {
  return (
    <>
    <TextField 
    label={label}
    type={type}
    value={value}
    onChange={(e)=>handleChange(e.target.value)}
    variant='outlined'
    fullWidth
    sx={{
        "& .MuiOutlinedInput-root":{
            borderRadius:"40px",
            backgroundColor:"#e8eff7",
            "&.Mui-focused.MuiOutlinedInput-notchedOutline":{
                borderColor:"#b0bec5"
            },
        },

        "&.MuiInputLabel-root":{
            "&.Mui-focused":{
                color:"#0D47A1"
            },
        },

    }}
    />
    </>
  )
}
