import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import { Fade, Modal, Popover, Popper } from '@mui/material';
import { Box } from '@mui/system';
import {GrClose} from 'react-icons/gr';
import {FcCloseUpMode} from 'react-icons/fc';
import {BsTools,BsGraphUp} from 'react-icons/bs'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: document.body.offsetWidth/2, height: document.body.offsetHeight-150,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  overflowY:'scroll',
  overflowX:'auto'
};

export default function MediaCard({el}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 345 , borderRadius: '1rem',backgroundColor:'#FAF2F1',marginLeft:10, marginTop:10}}>
      <CardMedia
        sx={{ height: 200 ,borderRadius: '1.2rem'}}
        image="https://voracious-process-9fb.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3629090d-3345-4190-bdd2-88a4df094983%2FUntitled.png?table=block&id=b637ff73-3c4c-4761-8fb9-fed17dc7ec40&spaceId=12843261-57ef-4646-a419-56394aa12631&width=2000&userId=&cache=v2"
        title="green iguana"
      />
      <CardContent sx={{width:400}}>
        <Typography gutterBottom variant="h5" component="div">
          쇼핑몰 프로젝트
        </Typography>
        <Typography variant="body2" color="text.secondary">
        개인 프로젝트
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex',justifyContent:"flex-end"}}>
        <Button size="small"
         onClick={handleOpen}
        sx={{backgroundColor:'#9C4146',color:"white",borderRadius:"1.5rem",
      '&:hover': {
        backgroundColor: '#7d2a30',
        opacity: [0.9, 0.8, 0.7],
      }}}>자세히 보기</Button>
       <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: document.body.offsetWidth/2 }}>
        <div className='flex justify-between'>
        <h2 id="child-modal-title">쇼핑몰 프로젝트</h2> 
          <Button onClick={handleClose}><GrClose className='text-5xl'></GrClose></Button>
        </div>
        <div className='mb-3'>
          <ul>
            <li>생성 날짜 : 2023년 02월 24일</li>
            <li>주요 기술 : REACT, FIREBASE, NETLIFY, JAVASCRIPT, tailwindCSS</li>
            <li>바로 가기 링크 : <a href="https://main--silver-crostata-7745ac.netlify.app/" className='underline'>CLICK HERE</a></li>
          </ul>
        </div>
        <img src="https://voracious-process-9fb.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3629090d-3345-4190-bdd2-88a4df094983%2FUntitled.png?table=block&id=b637ff73-3c4c-4761-8fb9-fed17dc7ec40&spaceId=12843261-57ef-4646-a419-56394aa12631&width=2000&userId=&cache=v2"></img>
          <p className='bg-color-bg-dark py-3 my-3 text-xl'>
          <FcCloseUpMode className='inline mr-3'></FcCloseUpMode>
          구글 아이디를 통해 로그인/ 로그아웃을 할 수 있고 로그인한 사용자가 제품을 고르거나 수량을 조절 하는 등, 결제 전의 모든 행위를 할 수 있도록 만든 웹 어플리케이션입니다. 관리자 아이디로 로그인 하면, 제품을 등록하거나 삭제할 수 있습니다. Tailwind CSS를 사용하여 데스크탑은 물론 모바일에서도 반응형으로 손쉽게 이용할 수 있습니다.
          </p>
          <div>
            <h3><BsTools className='inline'></BsTools> 주요 사용 기술</h3>
            <ul>
              <li>HTML/Javascript/TailwindCSS</li>
              <li>React</li>
              <li>RESTful API</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div>
            <h3><BsGraphUp className='inline'></BsGraphUp> 주요 사용 기술</h3>
            <ul>
              <li>HTML/Javascript/TailwindCSS</li>
              <li>React</li>
              <li>RESTful API</li>
              <li>Firebase</li>
            </ul>
          </div>
        </Box>
      </Modal>


       <Button size="small" sx={{borderRadius:"1.5rem",
      '&:hover': {
        backgroundColor: '#7d2a30',
        opacity: [0.9, 0.8, 0.7],
      }}}>바로가기</Button>
      </CardActions>
    </Card>
  );
}