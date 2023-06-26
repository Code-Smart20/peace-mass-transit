import { Container, Grid } from '@mui/material'
import React from 'react'

const Announcement = () => {
  return (
    <div className='annoucement'>
      <Container>
        <Grid container sx={{ display:"flex"}}>

          <Grid item xs={4}>
            <h5>hellloo</h5>
          </Grid>

          <Grid item lg={4}>
            <h5>hellloo</h5>
          </Grid>

          <Grid item lg={4}>
            <h5>hellloo</h5>
          </Grid>


        </Grid>
      </Container>
    </div>
  )
}

export default Announcement