import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Products = () => {
  return (
    <div className='products'>
      <Container>
      <Typography variant='h5'>
        Our Products
      </Typography>

      <Typography variant='body1'>
        Place your Order And Get it Delivered
      </Typography>

        <Grid sx={{display:"flex"}}>

          <Grid item sx={6}>
            <img src='/_next/image?url=%2F_next%2Fstatic%2Fimages%2Fhydralic-2d75329c43a01b180448db4078a7cc51.png&w=3840&q=75'/>
          </Grid>

          <Grid item>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe earum ipsa non.</p>
          </Grid>

          <Grid item>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe earum ipsa non.</p>
          </Grid>

          <Grid item>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe earum ipsa non.</p>
          </Grid>

          <Grid item>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe earum ipsa non.</p>
          </Grid>

        </Grid>

      </Container>
        
    </div>
  )
}

export default Products