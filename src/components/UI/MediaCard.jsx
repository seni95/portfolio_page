import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({el}) {
  return (
    <Card sx={{ maxWidth: 345 , borderRadius: '1rem',backgroundColor:'#FAF2F1'}}>
      <CardMedia
        sx={{ height: 140 ,borderRadius: '1rem'}}
        image="https://voracious-process-9fb.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3629090d-3345-4190-bdd2-88a4df094983%2FUntitled.png?table=block&id=b637ff73-3c4c-4761-8fb9-fed17dc7ec40&spaceId=12843261-57ef-4646-a419-56394aa12631&width=2000&userId=&cache=v2"
        title="green iguana"
      />
      <CardContent sx={{}}>
        <Typography gutterBottom variant="h5" component="div">
          쇼핑몰 프로젝트
        </Typography>
        <Typography variant="body2" color="text.secondary">
        구글 아이디를 통해 로그인/ 로그아웃을 할 수 있고 로그인한 사용자가 제품을 고르거나 수량을 조절 하는 등, 결제 전의 모든 행위를 할 수 있도록 만든 웹 어플리케이션입니다. 관리자 아이디로 로그인 하면, 제품을 등록하거나 삭제할 수 있습니다. Tailwind CSS를 사용하여 데스크탑은 물론 모바일에서도 반응형으로 손쉽게 이용할 수 있습니다.
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex',justifyContent:"flex-end"}}>
        <Button size="small" sx={{backgroundColor:'#9C4146',color:"white",borderRadius:"1.5rem",
      '&:hover': {
        backgroundColor: '#7d2a30',
        opacity: [0.9, 0.8, 0.7],
      }}}>자세히 보기</Button>
       <Button size="small" sx={{borderRadius:"1.5rem",
      '&:hover': {
        backgroundColor: '#7d2a30',
        opacity: [0.9, 0.8, 0.7],
      }}}>바로가기</Button>
      </CardActions>
    </Card>
  );
}