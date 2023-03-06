import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState} from 'react';
import { Modal, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import {GrClose} from 'react-icons/gr';
import { BsGraphUp,BsTools } from 'react-icons/bs';
import { FcCloseUpMode } from 'react-icons/fc';
import {RxMagnifyingGlass} from 'react-icons/rx';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DataGrid } from '@mui/x-data-grid';


export default function MediaCard({el}) {
const onMobile = useMediaQuery('(max-width:640px)');
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: onMobile?document.body.offsetWidth:document.body.offsetWidth/2, 
  height:document.body.offsetHeight-150,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  overflowY:'scroll',
  overflowX:'auto',
};


  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //콘텐츠 정보를 표로 정리하기 위한 객체
  function createData(title,content){
    return {title,content}
  }

  const rows = [
    createData('생성 날짜',el.detail.date),
    createData('주요 기술',<ul className='inline'>{el.detail.tech.map((i,index)=><li className={`inline mr-3 bg-selected`}  key={index}>{i}</li>)}</ul>),
    createData('바로 가기 링크',<a href={el.URL}>{el.URL}</a>),
    createData('깃허브 링크',<a href={el.GITHUB} className='underline bg-yellow'>{el.GITHUB}</a>),

  ]

  return (
    <Card sx={{ width: 345 , borderRadius: '1rem',backgroundColor:'#FAF2F1',flexShrink:0}}>
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
        {el.desc1}
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
        <Box sx={{ ...style, width: onMobile? document.body.offsetWidth:document.body.offsetWidth/2, height:document.body.offsetHeight-150}}>
        <div className='flex justify-between'>
        <h2 id="child-modal-title">{el.title}</h2> 
          <Button onClick={handleClose}><GrClose className='text-5xl'></GrClose></Button>
        </div>
        <Typography component={'span'}>
        <div className='mb-3'>
     <TableContainer>
      <Table>
        <TableBody>
          {rows.map((row)=>(
            <TableRow
            key={row.name}

            >
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     </TableContainer>
   </div>
   <img src={el.mainImg}></img>
     <p className='bg-color-bg-dark py-3 my-3 text-xl'>
     <FcCloseUpMode className='inline mr-3'></FcCloseUpMode>
      {el.desc2}
     </p>
     <div>
       <h3 className='my-5'><BsTools className='inline text-point'></BsTools> 사용 기술 및 라이브러리</h3>
       <ul>
        {el.tech.map((i,index)=><li key={index}>{i}</li>)}
       </ul>
     </div>
     <div>
       <h3 className='my-5'><BsGraphUp className='inline text-point'></BsGraphUp> 성장 경험</h3>
       <ul>
         {el.growth.map((i,index)=><li key={index}>{i}</li>)}
       </ul>
     </div>
     {el.update && 
      <div>
       <h3 className='my-5'><RxMagnifyingGlass className='inline text-point'></RxMagnifyingGlass> 장애와 개선</h3>
      {el.update}
      </div>}
   </Typography>
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