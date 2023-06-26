import { Container, Grid } from '@mui/material'
import React from 'react'

const Agents = () => {
  return (
    <div className='agents'>
        <Container sx={{width:"50%", margin:"0 auto"}}>
          <Grid container>
            <Grid item sx={4}>

            </Grid>

            <Grid item xs={4} sx={{ backgroundColor:"blue",height:"20rem", width:"20rem",backgroundRepeat:"no-repeat", backgroundImage:'url("https://www.pmt.ng/_next/image?url=%2F_next%2Fstatic%2Fimages%2FterminalBus-248f40cb648cee776dd3a017664bf06d.png&w=1920&q=75")'}}>
                heloo
            </Grid>
          </Grid>
          
        </Container>
    </div>
  )
}

export default Agents