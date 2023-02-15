import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {FiMenu} from 'react-icons/fi'
export default function Header() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='max-lg:flex-col absolute z-[500] 
    inset-x-0 px-10 py-5 flex items-center justify-between bg-header-color gap-y-5
    rounded-full mx-10 my-2 lg:h-[100px]
    max-md:rounded-none max-md:m-0 max-md:px-0
    max-sm:flex-row'>
      <div className='sm:hidden absolute'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <FiMenu className='text-point text-xl'></FiMenu>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem><a href="#basicInfo">기본정보</a></MenuItem>
        <MenuItem><a href="#portfolio">포트폴리오</a></MenuItem>
        <MenuItem><a href="#myStory">나의 이야기</a></MenuItem>
        <MenuItem><a href="#myGallery">갤러리</a></MenuItem>
      </Menu>
    </div>

       <h1 className='text-4xl max-sm:text-xl max-sm:grow text-center'>황세연 포트폴리오</h1>
       <nav>
        <ul className='flex max-sm:hidden'>
            <li><a href="#basicInfo">기본정보</a></li>
            <li><a href="#portfolio">포트폴리오</a></li>
            <li><a href="#myStory">나의 이야기</a></li>
            <li><a href="#myGallery">갤러리</a></li>
        </ul>
       </nav>
    </div>
  )
}
