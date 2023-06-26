import { AppBar, Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  return (
    <div className='nav' sx={{position:"fixed", top:"0",width:"100vw",}}>
      <AppBar>
        <Container>
          <Grid sx={{display:"flex",
                     flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
              
                <Grid item  sx={{ display:"flex",flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                  <Box alignItems="center">
                    <Link to="/">
                      <img src="https://pmt.ng/_next/image?url=%2F_next%2Fstatic%2Fimages%2Flogo-ef368fb9425395f94fe0a63f723c2897.png&w=48&q=75" alt="" />
                    </Link>
                  </Box>

                  <Box>

                    <Link><Typography variant="h5"> PMT.ng</Typography></Link>

                  </Box>


                </Grid>

                <Grid item sx={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",}}>
                  <NavLink to="/">Home</NavLink>
                  <Link to="/Travel">Travel</Link>
                  <Link to="Terminal">Terminal</Link>
                  <Link to="Rout">Routes</Link>
                  <Link to="Shop">Shop</Link>
                  <Link to="Tech">Tech</Link>
                  <Link to="Blog">Blog</Link>
                </Grid>

                <Grid item>
                    login Bar
                </Grid>

              
          </Grid>
        </Container>
   
      </AppBar>
    </div>
  )
}

export default Nav