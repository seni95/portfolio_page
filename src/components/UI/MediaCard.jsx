import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import {GrClose} from 'react-icons/gr';

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
  overflowX:'auto',
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
    <Card sx={{ width: 345 , borderRadius: '1rem',backgroundColor:'#FAF2F1',marginLeft:10, marginTop:10,flexShrink:0}}>
      <CardMedia
        sx={{ height: 200 ,borderRadius: '1.2rem'}}
        image={el.mainImg}
        title="green iguana"
      />
      <CardContent sx={{width:400, fontFamily:"Do Hyeon"}}>
        <Typography gutterBottom variant="h5" component="div">
          {el.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {el.desc}
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
        <Box sx={{ ...style, width: document.body.offsetWidth/2, height:document.body.offsetHeight-150}}>
        <div className='flex justify-between'>
        <h2 id="child-modal-title">{el.title}</h2> 
          <Button onClick={handleClose}><GrClose className='text-5xl'></GrClose></Button>
        </div>
          {el.view}
        </Box>
      </Modal>


       <Button size="small" sx={{borderRadius:"1.5rem",
      '&:hover': {
        backgroundColor: '#7d2a30',
        opacity: [0.9, 0.8, 0.7],
      }}}><a target="_blank" href={el.URL}>바로가기</a></Button>
      </CardActions>
    </Card>
  );
}