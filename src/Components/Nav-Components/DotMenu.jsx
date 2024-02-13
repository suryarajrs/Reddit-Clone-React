import { Avatar, IconButton, ListItemIcon } from "@mui/material"
import React from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useDispatch } from "react-redux";
import { showLoginForm } from "../../action";
import { useSnackbar } from 'notistack';


const DotMenu = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);

  };
  const handleClickSnackBar = () => {
    enqueueSnackbar('Features Comming soon');
  };
  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('Features Comming soon!', {
      variant
    });
  };
  

  return (

    <>

      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 0, p: 0 }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        disableRipple
      >
        <Avatar sx={{ width: 42, height: 45, backgroundColor: 'white', color: 'black', "&:hover": { backgroundColor: 'rgb(218,224,230)' } }}>
          <MoreHorizIcon />
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1,
            width: '280px',
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: 0,
              mr: 0,
            },

          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => { dispatch(showLoginForm("Login")) }} sx={{ p: '15px 0px 20px 20px' }} disableRipple onClose={handleClose} >
          <LoginOutlinedIcon sx={{ mr: '15px' }}></LoginOutlinedIcon>   Login/Signup
        </MenuItem>


        <MenuItem onClick={handleClickVariant('info')} sx={{ p: '15px 0px 20px 20px' }} disableRipple onClose={handleClose}>
          <CrisisAlertOutlinedIcon sx={{ mr: '15px' }}></CrisisAlertOutlinedIcon>  Advertise on Reddit
        </MenuItem>
        <MenuItem onClick={handleClickVariant('info')} sx={{ p: '15px 0px 20px 20px' }} disableRipple onClose={handleClose}>
          <ShoppingBagOutlinedIcon sx={{ mr: '15px' }}></ShoppingBagOutlinedIcon> Shop Collectible Avatars
        </MenuItem>
        
      </Menu>
    </>

  )
}

export default DotMenu  