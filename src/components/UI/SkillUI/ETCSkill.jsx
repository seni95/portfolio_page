import { Card, CardMedia } from '@mui/material'
import React from 'react'

export default function ETCSkill() {
  return (
    <Card sx={{display:'flex', padding:2 }}>
        <CardMedia
        className='p-5'
        component="img"
        sx={{ width: 151, height: 151,objectFit:"contain"  }}
        image={`${process.env.PUBLIC_URL}/img/Tailwind.png`}
        alt="Live from space album cover"
        />
        <CardMedia
        className='p-5'
        component="img"
        sx={{ width: 151, height: 151,objectFit:"contain"  }}
        image={`${process.env.PUBLIC_URL}/img/PostCSS.png`}
        alt="Live from space album cover"
        />
    </Card>
  )
}
