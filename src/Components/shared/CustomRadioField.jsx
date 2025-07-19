import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'

export default function CustomRadioField({option,label,handleChange,value}) {
  return (
    <>
    <FormControl 
    fullWidth
    sx={{
        flexDirection:'row',
        alignItems:'center',
        gap:'10px'
    }}
    >
        <FormLabel>{label}</FormLabel>
        <RadioGroup 
        row
        value={value}
        onChange={(e)=>handleChange(e?.target?.value)}
        >
            {option?.map((option,index)=>(
                <FormControlLabel  
                key={index}
                value={option?.value}
                control={<Radio/>}
                label={option?.label}
                />
            ))}
        </RadioGroup>
    </FormControl>


    </>
  )
}
