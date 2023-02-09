import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';

export default function Stroies() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#f5f0f0',borderRadius:'1rem'
    ,boxShadow:'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'}}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          </Avatar>
        </ListItemAvatar>
        <Typography>
            성장과정
        </Typography>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          </Avatar>
        </ListItemAvatar>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          </Avatar>
        </ListItemAvatar>
        <Typography>
            입사 후 포부
        </Typography>
      </ListItem>
    </List>
  );
}