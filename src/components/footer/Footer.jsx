
import { Avatar, Box, Button, Container, Grid, Stack, Typography,} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {FacebookIcon,TwitterIcon,LinkedinIcon,YoutubeIcon} from '@mui/icons-material';
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'
     style={{marginTop:"3rem", padding:"3rem", width:"100vw", bottom:"0", height:"fit-content", backgroundColor:"#423E92", color:"rgba(240,240,240,0.85)"}}>
        <Container>
          <Grid container spacing={4} sx={{padding:"2rem"}}>

            <Grid item xs={4}>
              <Stack item  sx={{flexDirection:"row", justifyContent:"space-betwwen", alignItems:"center",marginBottom:"3rem"}}>

                   <Stack sx={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
                      
                   <Link to="/">
                        <img src="https://pmt.ng/_next/image?url=%2F_next%2Fstatic%2Fimages%2Flogo-ef368fb9425395f94fe0a63f723c2897.png&w=48&q=75" alt="" />
                      </Link>
                   </Stack>

                   <Link><Typography variant="h4"> PMT.ng</Typography></Link>

              </Stack>

              <Stack>
                <Typography variant="body1">
                 Our Vision is to use all available resources
                 to become the largest and most efficient road transport corporation world over.
                </Typography>
              </Stack>

              <Stack>
                <Button variant='contained' sx={{display:"inline"}}>helo</Button>
                <Button variant="contained" sx={{display:"inline"}}>hello</Button>
              </Stack>

            </Grid>

            <Grid item xs={2}>
              <Typography variant='h5'>Company</Typography>
              
               <Stack>
                <Link to="/About">About Us</Link>
                <Link to="/Blog">Blog</Link>
                <Link to="/Contact-us">Contact Us</Link>
                <Link to="/Faqs">FAQS</Link>
                <Link to="/Privacy-policy">Privacy policy</Link>
                <Link to="/Terms-&-conditions">Terms & conditions</Link>
              </Stack>
           

            </Grid>

            <Grid item xs={2}>
            <Typography variant='h5'>Travel</Typography>
            
             
            <Stack>
                <Link to="/Book-a-seat">Book A Bus</Link>
                <Link to="/Reservation-status">Reservation Status</Link>
                <Link to="/Travel-terminals">Travel Terminals</Link>
                <Link to="/Travel-routes">Travel Routes</Link>
                <Link to="/Become-an-agent">Become An Agent</Link>
                <Link to="/Terms-&-conditions">Terms & conditions</Link>
            </Stack>
           

            </Grid>

            <Grid item xs={2}>
            <Typography variant='h5'>Logistics</Typography>
                
            <Stack>
                <Link to="">Request A Pickup</Link>
                <Link to="">Track Parcel</Link>
                <Link to="">Logistics Terminals</Link>
                <Link to="">Become an Agent</Link>
            </Stack>
          
            </Grid>

            <Grid item xs={2}>
              <Typography variant='h5'>PMT</Typography>
            
              <Stack>
                  <Link to="">Peace Mass Transit</Link>
                  <Link to="">PMT Logistics</Link>
                  <Link to="">PMT Technologies</Link>
                  <Link to="">PMT SHOP</Link>
                  <Link to="">PMT Printing Press</Link>
                  <Link to="">PMT Petroleum</Link>
                  <Link to="">PMT Ugama Assemble</Link>
                  <Link to="">PMT Construction</Link>
                
              </Stack>

            </Grid>

          </Grid>

          <Stack>
            <Stack gap={4} p={4} sx={{flexDirection:"row",justifyContent:"center",borderTop:"2px Solid gray"}}>
              <Avatar></Avatar>
              <Avatar></Avatar>
              <Avatar></Avatar>
              <Avatar></Avatar>
            </Stack>

            <Stack>
              <Typography component="small" variant='h6' sx={{textAlign:"center"}}>
                 Copyright © 2023 Peace Group. All right reserved.
              </Typography>
            </Stack>

          </Stack>
      
        </Container>

    </div>
  )
}

export default Footer