import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import ServiceCards from './ServiceCards'

const Services = () => {
  return (
    <div className='Services'>
       <Container>

         <Typography variant='h5'>
             Our Services
         </Typography>

         <Typography variant='body1' sx={{margin:"1.2rem 0"}}>
             Peace Group offers other range of services
         </Typography>

         <Grid container  >
          <Grid item sx={{display:"flex", justifyContent:"space-between", gap:"10px"}}>
            <ServiceCards red="https://www.pmt.ng/_next/image?url=%2F_next%2Fstatic%2Fimages%2Fbus3-e235cad1c22bcf13364799b949c3df42.png&w=1920&q=75" />
            <ServiceCards/>
            <ServiceCards/>
            <ServiceCards/>
            <ServiceCards/>

          </Grid>
         </Grid>

       </Container>
    </div>
  )
}

export default Services