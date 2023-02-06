import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }} className='mb-10'>
         <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={`${process.env.PUBLIC_URL}/img/HTML.png`}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1' }}>
          <Typography component="div" variant="h5">
            HTML
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          "원하는 방식대로 문서의 구조를 잡고 텍스트의 구조적 의미를 표시하여 구조화된 문서를 만들 수 있습니다. 또한 검색엔진이 이해하기 쉽도록 홈페이지의 구조와 페이지를 개발해 검색 결과 상위에 노출 할 수 있도록 하는 작업을 할 수 있습니다."
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}