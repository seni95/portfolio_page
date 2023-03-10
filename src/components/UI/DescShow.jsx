import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function DescShow({ title ,children, desc, hoverType = "rounded" }) {

  const onMobile = useMediaQuery('(max-width:640px)')

  const ToolsExplain = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(14),
      border: '1px solid #dadde9',
      padding: "10px"
    },
  }));



  return (
    <ToolsExplain
      title={
        <React.Fragment>
          <Typography color="var(--color-point)" sx={{fontWeight:'bold'}}>{title}</Typography>
          {desc}
        </React.Fragment>
      }
    >
      {hoverType === "rounded" ?
        <IconButton sx={{ fontSize:onMobile?"3rem":"10rem",padding: onMobile?"0":"10px", width: "100%" }}>
          {children}
        </IconButton> :
        <Button sx={{ fontSize: "10rem",width: "100%" }}>
          {children}
        </Button>
      }
    </ToolsExplain>)
}
