import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';

export default function DescShow({children,title,desc}) {

    
  const ToolsExplain = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));



  return (
    <ToolsExplain
        title={
          <React.Fragment>
            <Typography color="inherit" sx={{fontSize:"1.5rem"}}>{title}</Typography>
            {desc}
          </React.Fragment>
        }
      >
      {/* <IconButton sx={{fontSize:"10rem"}}> */}
        <Button sx={{fontSize:"10rem"}}>
    {children}
    </Button>
    {/* </IconButton> */}
    </ToolsExplain>)
}
