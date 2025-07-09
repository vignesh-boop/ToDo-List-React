import React from 'react'
import {Box, Button, Card, Container,Typography} from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
import { postDatas} from './data';

export default function DisplayPage() {
  const {displ} = useParams();
  const data = postDatas[displ];

  console.log(displ);
  const navigate = useNavigate();

  return (
    <>  
     <Container>
        <Typography variant='h4'gutterBottom>
            Dynamic Routing
        </Typography>
        <Button variant='outlined' sx={{margin:'20px'}} onClick={()=>navigate('/home/post1')}>Post 1</Button>
        <Button variant='outlined' onClick={()=>navigate('/home/post2')}>Post 2</Button>
        <Button variant='contained' sx={{margin:'20px'}} onClick={()=>navigate('/home/user1')}>User : Alex</Button>
        <Button variant='contained' onClick={()=>navigate('/home/user2')}>User : Zeo</Button>
    </Container>  

{(displ=="post1" || displ=="post2")?
      <Container>
      <Card sx={{width:"600px", padding:"10px"}}>
        <Typography variant='h5'>{data?.title}</Typography>
        <Typography variant='body1'>{data?.decreption}</Typography>
      </Card>
    </Container>    
      
:(displ=="user1"||displ=="user2")?
    <Container sx={{width:"600px", padding:"10px",display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
      <Box display='flex' justifyContent={'center'} alignItems='center' borderRadius={"50px"} width={"100px"} height={"100px"} bgcolor={"gray"} margin={"0 auto"}>
        <Typography variant='h5'>{data?.title}</Typography>
      </Box>
        <Typography variant='h5'>Hellow ! {data?.decreption}</Typography>
    </Container>
    :""
}
    </>
    )
    }

