import { Card, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function DBSkill() {
  return (
    <Card sx={{display:'flex', padding:2, flexDirection:"column",width: 161}}>
        <Typography gutterBottom variant="h5" component="div"
      sx={{textAlign:"center"}}
      >
          Firebase
        </Typography>
        <CardMedia
        className='p-5'
        component="img"
        sx={{ width: 151, height: 151,objectFit:"contain"  }}
        image={`${process.env.PUBLIC_URL}/img/FIREBASE.png`}
        alt="Live from space album cover"
        />
        <Typography component="div">
    Firebase 프로젝트를 만들고, 웹에 등록하여 각종 사용자 인증과 관련된 기능을 구현하거나
    실시간 데이터베이스 기능을 이용하여 데이터를 저장하고 기록할 수 있는 기능을 구현할 수 있습니다.
      </Typography>
    </Card>
  )
}
