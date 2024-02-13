import React, { useRef } from 'react'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { IconButton, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { getCommentsData, showLoginForm } from "../../action";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import JoinInnerOutlinedIcon from '@mui/icons-material/JoinInnerOutlined';
import { useSnackbar } from 'notistack';
import IosShareIcon from '@mui/icons-material/IosShare';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';










const PostCommentsBox = ({ data }) => {




  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const login = useSelector((store) => store.isLoggedIn)
  const anchorRef = useRef(null);


  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    console.log("snackba inside")
    setOpen(false);
    enqueueSnackbar('Text copied to clipboard', {
      variant
    });
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    handleClickVariant('info')
    { console.log('click on info'); }
    if (anchorRef.current && anchorRef.current.contains(event.target)) {

      return;
    }

    setOpen(false);
  };


  const navigate = useNavigate();
  const dispatch = useDispatch()


  // {console.log("comments: " + data.post._id)}
  // { console.log('data: ' + data.post.content) }

  const id = data.post._id;

  return (
    <>
      <Stack direction="row" spacing={0} >

        
      {login||<IconButton disableRipple onClick={()=> dispatch(showLoginForm("Login"))} sx={{ mt:'7px',"&:hover": {}, borderRadius: '30px', bgcolor: 'rgb(210,210,210)', p:'0px 15px 0px 15px' ,height:'35px' }}>
      <ArrowUpwardIcon fontSize='small'></ArrowUpwardIcon>
      <Typography sx={{ m: '0px 13px 0px 13px', fontWeight: '800', fontSize: '13px' }} variant='p'>{data?.post?.likeCount}</Typography>
      <ArrowDownwardIcon fontSize='small'></ArrowDownwardIcon>
      </IconButton>}

        <IconButton

          onClick={() => {
            if (!login) {
              dispatch(showLoginForm("Login"))
              return;
            }
           
            navigate(`/comments/${id}`)
            dispatch(getCommentsData(
              {
                content: data.post.content,
                postLikes: data.post.likeCount,
                commentsCount: data.post.commentCount,
                channelName: data.post.channel.name,
                channelImage: data.post.channel.image,
                authorName: data.post.author.name,
                 postImage: data.post.images[0],
              }
            ));
          }}


          size="medium"
          aria-label="show more"
          aria-haspopup="true"
          color="inherit"

          disableRipple

          sx={{ borderRadius: 0 }}
        >


          {login ? (
            <>
           
            <IconButton sx={{ "&:hover":{bgcolor: 'rgb(230,230,230)'}, borderRadius: '0px', p: '10px 15px 10px 15px' }}>
            <ChatBubbleOutlineOutlinedIcon></ChatBubbleOutlineOutlinedIcon>
              <Typography>{`${data.post.commentCount}Comments`}</Typography>
              </IconButton>
            
            
            </>
          ) :
            (
              <IconButton sx={{ bgcolor: 'rgb(210,210,210)', borderRadius: '50px', p: '5px 27px 5px 27px',ml:'8px' }}>
                <ChatBubbleOutlineOutlinedIcon></ChatBubbleOutlineOutlinedIcon>
                <Typography sx={{ml:'5px'}} >{data.post.commentCount}</Typography>
              </IconButton>)}
        </IconButton>



        {login||<IconButton
          disableRipple
          onClick={handleToggle}
        >
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            color='inherit'

            sx={{ "&:hover": {}, borderRadius: '30px', bgcolor: 'rgb(210,210,210)', p: '5px 15px 5px 15px' }}
            disableTouchRipple
          >
            <IosShareIcon></IosShareIcon>
            <Typography sx={{ textTransform: 'none ', }} >Share</Typography>
          </Button>
        </IconButton>}

        {login&&<IconButton
          disableRipple
          onClick={handleToggle}
        >
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            color='inherit'

            sx={{ "&:hover":{bgcolor: 'rgb(230,230,230)'}, borderRadius: '0px', p: '10px 15px 10px 15px' }}
            disableTouchRipple
          >
            <IosShareIcon></IosShareIcon>
            <Typography sx={{ textTransform: 'none ', }} >Share</Typography>
          </Button>
        </IconButton>}

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal

        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                  >
                    <MenuItem onClick={handleClickVariant('success')}><JoinInnerOutlinedIcon sx={{ m: '0px 10px 0px 10px' }} ></JoinInnerOutlinedIcon>Copy</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>




        {/* <IconButton
            size="medium"
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
            disableTouchRipple
            sx={{ borderRadius: 0, p: '0', Mr: '10px', ml: '10px' }}
          >
            <TurnedInNotOutlinedIcon></TurnedInNotOutlinedIcon>

            <Typography>Save</Typography>
          </IconButton>
          <IconButton
            size="medium"
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
            disableTouchRipple
            sx={{ borderRadius: 0, p: '0', Mr: '10px', ml: '10px' }}
          >
            <MoreHorizOutlinedIcon></MoreHorizOutlinedIcon>

          </IconButton> */}
        {/* </Link> */}

      </Stack>


    </>
  )
}
export default PostCommentsBox