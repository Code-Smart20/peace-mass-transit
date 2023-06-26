import { Card } from '@mui/material'
import React from 'react'

const ServiceCards = ({background}) => {
  return (
    <div className='serviceCards'>
        <Card className="card" sx={{
          height:"30rem",
           width:"400px",
          '&:hover': {
            transform:"scaleY(1.08)"
            }
      
          }}>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos iste alias?</h5>

        </Card>
    </div>
  )
}

export default ServiceCards