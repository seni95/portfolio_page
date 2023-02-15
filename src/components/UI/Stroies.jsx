import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Collapse, IconButton, Typography } from '@mui/material';
import SelfIntroduction from '../../Contents/SelfIntroduction';
import { Box } from '@mui/system';

import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Stroies() {
    
    const [open, setOpen] = useState(0);
    const onMobile = useMediaQuery('(max-width:640px)')
    const contents = SelfIntroduction();
    return (
        <List sx={{ bgcolor: '#f5f0f0',borderRadius:'1rem',padding:"10px",width:onMobile?"100%":"75%"
        ,boxShadow:'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',cursor:"pointer"}}>
        {
            contents.map((item,index)=>(
          
                <ListItem key={index} sx={{width:"100%"}}  onClick={()=>setOpen(open===index ? -1:index)}>
                  <ListItemAvatar sx={{display:onMobile?"none":""}}>
                    <Avatar sx={{background:"transparent"}}>
                      {item.avatar}
                    </Avatar>
                  </ListItemAvatar>
                  <Box sx={{display:'flex', flexDirection:'column'}}>
                  <Typography sx={{fontFamily:"Do Hyeon", fontSize:"1.5rem"}}>
                      {item.title}
                  </Typography>
                  <Collapse in={open === index}>
                    {item.content}
                  </Collapse>
                  </Box>
                </ListItem>
          ))
        }
        </List>

  );
}