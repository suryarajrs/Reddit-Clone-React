
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useNavigate } from 'react-router';
import { useSnackbar } from 'notistack';
import { useState } from 'react';


const MenuSearchBar = () => {

   const navigate = useNavigate()
  


  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '4px',

    backgroundColor: "#EDEFF1",
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
      border: '1px solid blue',
    },
    marginRight: theme.spacing(0),
    height:'42px',
    width:'493px',
    [theme.breakpoints.down('md')]: {
      width: '320px',
      height:"42px",
      
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      [theme.breakpoints.up('xs')]: {
        width: '49ch',
        marginLeft: '15px'
      },
    },
  }));

  return (
    <>
      <Search>
        <StyledInputBase
          placeholder="Create Post"
          inputProps={{ 'aria-label': 'search' }}
          onClick={()=>{navigate("/createPost")}}
        />
      </Search>


    </>
  )
}

export default MenuSearchBar