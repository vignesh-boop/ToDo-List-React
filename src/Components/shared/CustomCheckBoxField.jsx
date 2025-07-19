import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'

export default function CustomCheckBoxField({label,value,handleChange}) {
  return (
    <>
    <FormControlLabel
    control={<Checkbox checked={value} onChange={handleChange}/>}
    label={label}
    />
    </>
  )
}
