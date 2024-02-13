import { styled } from '@mui/material/styles';
import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import ArrowBar from './ArrowBar';
import PostHeader from './PostHeader';
import PostCommentsBox from './PostCommentsBox.jsx';
import { useNavigate } from "react-router";
import CardMedia from '@mui/material/CardMedia';
import { getCommentsData } from "../../action";
import { useDispatch, useSelector } from "react-redux";







const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: '3px',



}));

const FeedContainer = (props) => {

  const navigate = useNavigate()
  const Id = props?.post?._id
  const login = useSelector((store) => store.isLoggedIn)
  const dispatch = useDispatch()

  return (
    <>
      <Stack direction="row"


        spacing={0} sx={login ? ({ borderRadius: '3px', cursor: 'pointer', "&:hover": { outline: '1px solid grey' } }) : ({ cursor: 'pointer', })} >
       

        
        {login && <Item sx={{ flexShrink: '1', borderRadius: '0px', bgcolor: '#F8F9FA', boxShadow: 'none' }}>
          <ArrowBar data={props}></ArrowBar>
        </Item>}


        <Item sx={{ flexGrow: '1', borderRadius: '0px', p: '0', boxShadow: 'none', }}>
          <Stack direction="column" spacing={0} >
            <Item sx={{ p: '0px', boxShadow: 'none' }}>
              <PostHeader data={props}></PostHeader>
            </Item>
            <Item sx={{ p: '0', }}
              onClick={
                () => {
                  if(!login){
                    return 
                  }

                  navigate(`/comments/${Id}`)
                  dispatch(getCommentsData(
                    {
                      content: props.post.content,
                      postLikes: props.post.likeCount,
                      commentsCount: props.post.commentCount,
                      channelName: props.post.channel.name,
                      channelImage: props.post.channel.image,
                      authorName: props.post.author.name,
                      postImage: props.post.images[0],
                    }
                  ));

                }

              }
            >

              <Stack direction="column" spacing={0} >

                <Item sx={login ? ({ boxShadow: 'none',  }) : ({ padding: '0px 0px 0px 35px', borderRadius:'20px',boxShadow:'none' , "&:hover":{bgcolor:'rgb(234,237,239)'} })}>
                  {login || <Typography align='left' sx={{ mt: '8px', fontWeight: 'bold', color: 'black', fontSize: '20px' }} variant='h6'>{props?.post?.content.slice(0, 58)}</Typography>}
                  <CardMedia
                    component="img"
                    alt={`Can't load image please refresh...{${props?.post?.author?.name}'post}`}
                    height="40%"
                    src={props?.post?.images}
                    sx={login || { borderRadius: "20px", width: {xl:"98%",xs:'81%' , md:'90%'}, }}
                  />
                  {login && <Typography align='left' sx={{ mt: '8px' }} variant='h6'>{props?.post?.content}</Typography>}
                  {login || <PostCommentsBox data={props}  ></PostCommentsBox>}

                </Item>

              </Stack>
            </Item>
            <Item sx={{ p: '0', boxShadow: 'none' }}>

             {login && <PostCommentsBox data={props}  ></PostCommentsBox>}
            </Item>
          </Stack>
        </Item>


      </Stack>

    </>
  )
}
export default FeedContainer
