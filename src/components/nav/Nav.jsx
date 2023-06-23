import { AppBar, Box, Container, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav' sx={{position:"fixed", top:"0",width:"100vw", height:"10rem"}}>
      <AppBar>
        <Container>
          <Stack sx={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>

            <Stack>
              <Box>
                
                  <img src="https://pmt.ng/_next/image?url=%2F_next%2Fstatic%2Fimages%2Flogo-ef368fb9425395f94fe0a63f723c2897.png&w=48&q=75" alt="" />
                
              </Box>
              <Box>

              </Box>


            </Stack>


            <Stack>
               navigation
            </Stack>

            <Stack>
                login Bar
            </Stack>

          </Stack>
        </Container>
   
      </AppBar>
    </div>
  )
}

export default Nav