import React from 'react'
import './header.css'
import { Container, Grid, Paper, Typography } from '@mui/material'


const Header = () => {
  return (
    <div className='header'>
      <Container>
        <Grid container spacing={10} sx={{display:"flex", flexDirection:"row", marginTop:"50px"}}>
        
          <Grid item lg={6}>
          <h2><span style={{color:"#423E92",}}>Peace Mass</span><span style={{color:" #FC8800"}}>Transit</span></h2>

            <div className='background'>

             <Paper component="div" elevation={10} sx={{padding:"2rem", opacity:"0.8"}}>

              <Typography variant="p" sx={{color:"#423E92"}}>
                 Book your bus ticket online today and enjoy the most affordable Nigeria inter-city travel experience. Reserve a bus seat and travel to and from Aba, Abakaliki, Abuja, Afikpo, Akure, Asaba, Awka, Benin, Calabar, Ekiti, Enugu, Enugu Ezike, Ibadan, Ibafo, Ikom, Ilorin, Jos, Kaduna, Lagos, Mararaba, Minna, Nnewi,
                 Nsukka, Obollo-Afor, Onitsha, Owerri, Port Harcourt, Suleja, Umuahia, Uyo, Warri, Yenagoa etc.
              </Typography>

             </Paper>
             </div>
          </Grid>

          <Grid item lg={6}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat repellat obcaecati animi? Ipsum in mollitia rem sed soluta error corporis dicta consectetur porro. Assumenda perspiciatis repellat voluptatum nesciunt necessitatibus.

          </Grid>

        </Grid>
      </Container>
    </div>
  )
}

export default Header