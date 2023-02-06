import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export default function MediaControlCard({el}) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }} className='m-10'>
         <CardMedia
         className='p-5'
        component="img"
        sx={{ width: 151 }}
        image={`${process.env.PUBLIC_URL}/img/HTML.png`}
        alt="Live from space album cover"
      />
       <CardMedia
         className='p-5'
        component="img"
        sx={{ width: 151 }}
        image={`${process.env.PUBLIC_URL}/img/CSS.png`}
        alt="Live from space album cover"
      />
    <CardMedia
         className='p-5'
        component="img"
        sx={{ width: 151 }}
        image={`${process.env.PUBLIC_URL}/img/JS.png`}
        alt="Live from space album cover"
      />
    </Card>
  );
}