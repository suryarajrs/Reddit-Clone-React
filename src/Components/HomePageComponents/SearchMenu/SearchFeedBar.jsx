import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import MenuSearchBar from "./MenuSearchBar";
import { IconButton, Stack } from '@mui/material';
import MmsOutlinedIcon from '@mui/icons-material/MmsOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import img from  "../../../images/displayPicture.png";




const SearchFeedBar = () => {
 
  const navigate = useNavigate();
  const currentuser = useSelector((store) => store.currentUser);



 

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
  }));
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 3px ${theme.palette.background.paper}`,
      width: '13px',
      height: '13px',
      borderRadius: '50%',

    },
  }));


  return (
    <>
      <Stack spacing={0} direction="row"sx={{}} >

        <Item>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src={(currentuser.photoURL)?(currentuser.photoURL):(img)}/>
          </StyledBadge>

        </Item>
        <Item >
          <MenuSearchBar></MenuSearchBar>
          
        </Item>

        
        <Item>
          <IconButton
            size="medium"
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
             onClick={()=>{navigate("/createPost")}}
            sx={{ borderRadius: 0 }}
          >

          <MmsOutlinedIcon></MmsOutlinedIcon>
          </IconButton>

        </Item>
        <Item>
          <IconButton
            size="medium"
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
            onClick={()=>{navigate("/createPost")}}
            sx={{ borderRadius: '0px' }}
          >

         <InsertLinkOutlinedIcon></InsertLinkOutlinedIcon>
          </IconButton>

        </Item>


      </Stack>





    </>
  )
}
export default SearchFeedBar