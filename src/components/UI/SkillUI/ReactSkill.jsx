import { Card, CardMedia,Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function ReactSkill() {
  return (
    <Card sx={{display:'flex', padding:2,flexDirection:"column", width:151*2+10*2}}>
        <Typography gutterBottom variant="h5" component="div"
      sx={{textAlign:"center"}}
      >
          React & React_Native
        </Typography>
        <Box sx={{display:"flex"}}>
        <CardMedia
        className='p-5'
        component="img"
        sx={{ width: 151, height: 151,objectFit:"contain"  }}
        image={`${process.env.PUBLIC_URL}/img/React.png`}
        alt="Live from space album cover"
        />
        <CardMedia
        className='p-5'
        component="img"
        sx={{ width: 151, height: 151,objectFit:"contain"  }}
        image={`${process.env.PUBLIC_URL}/img/React_Native.png`}
        alt="Live from space album cover"
        />
        </Box>
        <Typography component="div">
리액트를 이용해 웹 UI/UX를 구현 할 수 있습니다. 또한 React-Router나 React-Query와 같은 수많은 리액트 기반의 라이브러리를 이용하여
사용자와 상호작용 하게 하거나 서버와 통신 하는 등의 고차원적인 기능을 수행 할 수 있습니다.
또한 원하는 페이지를 리액트 네이티브로 빌드해 어플리케이션을 만들 수 있습니다.
      </Typography>
    </Card>
  )
}
