import { Card, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function SCMSkill() {
  return (
    <Card sx={{display:'flex', padding:2,width:151+10,flexDirection:"column" }}>
         <Typography gutterBottom variant="h5" component="div"
      sx={{textAlign:"center"}}
      >
          Git
        </Typography>
        <CardMedia
        className='p-5'
        component="img"
        sx={{ width: 151 }}
        image={`${process.env.PUBLIC_URL}/img/Git.png`}
        alt="Live from space album cover"
        />
      <Typography component='div'>
        Git을 활용해 소스코드의 버전을 관리하거나 브런치를 분리하여 타인과 협업 할 수 있습니다.
      </Typography>
    </Card>
  )
}
