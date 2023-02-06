import { Card, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function WebSkill() {
  return (
    <Card sx={{display:'flex',flexDirection: "column",padding:2, width:151*3+10*3}}>
      <Typography gutterBottom variant="h5" component="div"
      sx={{textAlign:"center"}}
      >
          HTML & CSS & JS
        </Typography>
      <Box sx={{display:'flex'}}>
        <CardMedia
        className='p-5'
        component="img"
        sx={{ width: 151 , height: 151 }}
        image={`${process.env.PUBLIC_URL}/img/HTML.png`}
        alt="Live from space album cover"
        >
        </CardMedia>
        <CardMedia
         className='p-5'
        component="img"
        sx={{ width: 151, height: 151,objectFit:"contain" }}
        image={`${process.env.PUBLIC_URL}/img/CSS.png`}
        alt="Live from space album cover"
      />
    <CardMedia
         className='p-5'
        component="img"
        sx={{ width: 151,height: 151 ,objectFit:"contain" }}
        image={`${process.env.PUBLIC_URL}/img/JS.png`}
        alt="Live from space album cover"
      />
      </Box>
      <Typography component="div">
      원하는 방식대로 문서의 구조를 잡고 텍스트의 구조적 의미를 표시하여 구조화된 문서를 만들 수 있습니다. 또한 검색엔진이 이해하기 쉽도록 홈페이지의 구조와 페이지를 개발해 검색 결과 상위에 노출 할 수 있도록 하는 작업을 할 수 있습니다.
      또한 완성된 HTML태그들에 CSS를 덧입혀 원하는 모습대로 웹 페이지를 디자인 할 수 있습니다.
      PostCSS나 Tailwind와 같은 프레임워크를 이용하여 더 빠르고 간편하게 디자인 작업을 수행 할 수 있습니다.
      JS를 이용하여 완성된 웹 페이지 화면에 동적인 이펙트들을 자유자재로 구현할 수 있습니다.

      </Typography>
    </Card>
  )
}
