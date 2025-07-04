import { Typography ,Button} from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



export default function About() {
  const navigate = useNavigate();
  return (
    <>
    <Typography variant='p' component='p' sx={{marginTop:"20px"}}>
      See more about <Link href="#" target='_blank'>link</Link>
    </Typography><br/>

    <Button variant='contained' sx={{margin:'10px'}} onClick={()=>navigate("/contact")}>Go to Contact</Button>
    <Button variant='outlined'color='secondary' onClick={()=>navigate(-1)}>Go Back</Button>
    </>
  )
}
