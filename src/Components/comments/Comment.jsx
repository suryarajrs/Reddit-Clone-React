import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./comment.css";
const Token = JSON.parse(localStorage.getItem("reddit_token"));
import { useSelector } from "react-redux";
import { Avatar, CardMedia, IconButton, Paper, Stack, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShortcutOutlinedIcon from '@mui/icons-material/ShortcutOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Divider from '@mui/material/Divider';
import { formatDistanceToNow } from "date-fns";
import { Box } from '@mui/material'
import img from "../../images/Redditlogo.png";
import Loader from "../Loader/Loader";
import { useSnackbar } from "notistack";
const PROJECT_ID = "bkfxdn6q8uzn";


  //function to get author name

  const getAuthorName = async(author)=>{
   
   
    try{
      const responce = await fetch(`https://academics.newtonschool.co/api/v1/reddit/user/${author}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${Token}`,
          'projectID': PROJECT_ID
        }
      })

      const datas = await responce.json();
     

      return datas.data.name
    } catch(err){
       console.log(err);
    }

  }



export const MakeComment = ({
  textArea,
  userName,
  userPhoto,
  createdAt,
  commts,
  authorId
}) => {

  const [author , setAuthorName] =useState("")

    getAuthorName(authorId).then(value=>{
     setAuthorName(value)
   })



  return (

    <>
    
      <div className="reddit_clone-comment_item">

        <div className="reddit_clone-comment_item_avatar">
          {userPhoto ? (
            <div className="reddit_clone-comment_user_img">
              <img src={userPhoto} alt="nothing" style={{ maxWidth: "100%" }} />
            </div>
          ) : (
            <FaUserAstronaut />
          )}
          <div className="verticalLine"></div>
        </div>



        <div className="reddit_clone-comment_item_text">

          <span style={{ marginTop: '50px ', fontWeight: "bold", fontFamily: "var(--font-c)" }}>
            {author}
          </span>


          <span style={{ fontWeight: 200, margin: "0 1rem" }}>
            {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
          </span>

          <p style={{ margin: "20px 0px 0px 3px" }}>{textArea}</p>


          {commts ? (commts.map((ele, i) => {

           
            const [childCommentName, setchildCommentName] = useState("")

            
            getAuthorName(ele.author).then(value=>{
              setchildCommentName(value)
            })



            return (
              <Box sx={{ ml: `${i * 40}px` }}>
                <div className="reddit_clone-comment_item_childern">
                  <div className="reddit_clone-comment_item_avatar">
                    {userPhoto ? (
                      <div className="reddit_clone-comment_user_img">
                        <img src={userPhoto} alt="nothing" style={{ maxWidth: "100%" }} />
                      </div>
                    ) : (
                      <FaUserAstronaut />
                    )}

                    <div className="verticalLine"></div>
                  </div>


                  <div className="reddit_clone-comment_item_text">
                    <span style={{ fontWeight: "bold", fontFamily: "var(--font-c)" }}>
                      {childCommentName}-
                    </span>
                    <span style={{ fontWeight: 200, margin: "0 1rem" }}>
                      {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
                    </span>
                    <p style={{ margin: "20px 0px 0px 3px" }}>{ele.content}</p>
                   
                  </div>
                </div>
              </Box>



            )

          })) : (undefined)}



        </div>
      </div>


    </>

  );

};


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: 'none',

}));



const Comment = ({ id }) => {

  const postId = id.id;
  const commentdata = useSelector((store) => store.commentsData);
  const userName = useSelector((store) => store.currentUser.username);
  const [likeCount , setLikeCount] = useState(commentdata?.data?.postLikes)
  const { enqueueSnackbar } = useSnackbar();



  const navigate = useNavigate();
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(false)

  const inpRef = useRef();




  // function to get the comment 

  const getPostComment = async () => {
    setLoading(true);
    try { 
      const responce = await fetch(`https://academics.newtonschool.co/api/v1/reddit/post/${postId}/comments`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${Token}`,
          'projectID': PROJECT_ID
        }
      })
      const data = await responce.json();

      setComment(data.data);
      // console.log("comment initial data"+JSON.stringify(data)); 
      

    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };


  const handleComment = async () => {
    if (inpRef.current.value === "") return;
    const raw = JSON.stringify({
      "content": `${inpRef.current.value}`
    });

    try {
      const res = await fetch(`https://academics.newtonschool.co/api/v1/reddit/comment/${postId}`, {
        method: 'POST',
        headers: { 'projectID': PROJECT_ID ,'Content-Type': 'application/json','Authorization': `Bearer ${Token}` , } ,
        body: raw
      });

       const data = await res.json()
    
      getPostComment();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    inpRef.current.value = "";
  };

  useEffect(() => {
    getPostComment();
  }, []);



  return (
    <div
      className="reddit_clone-comment_container"
      
    >

      <div className="reddit_clone-comment_close">

        <Stack direction="row" spacing={1}>


          <IconButton
            size="medium"
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
            disableTouchRipple
            sx={{ borderRadius: 0, p: '0' }}
            onClick={ 
                        
              async  () => {  
                 
                const Token = JSON.parse(localStorage.getItem("reddit_token"));
                  try { 
                      const responce =  await fetch(`https://academics.newtonschool.co/api/v1/reddit/like/${postId}`,{
                          method: 'POST',
                          headers: {
                          'Authorization':`Bearer ${Token} `,
                          'projectID': PROJECT_ID
                      },
                    
                  })
                  const data = await responce.json();
                  console.log(data);
                   const message = data.message;
                  //  handleClickVariant('info')
                  enqueueSnackbar(message, {
                  
                    });
                 
                  if(data.status == 'success'){
                      setLikeCount((p)=>p+1)
                     
                  }
                  
                 
              }catch (err) {
                      console.error(err);
                  }
              
              }
          
          }
          >
            <ArrowUpwardIcon></ArrowUpwardIcon>
          </IconButton>
          <Typography sx={{ mt: '0', fontWeight: '800', fontSize: '13px' }} variant='p'>{likeCount}</Typography>


          <IconButton
            size="medium"
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
            disableTouchRipple
            sx={{ borderRadius: 0, pr: '0' }}
            onClick={
              async  () => {
                  const Token = JSON.parse(localStorage.getItem("reddit_token"));
                  try { const responce =  await fetch(`https://academics.newtonschool.co/api/v1/reddit/like/${postId}`,{
                      method: 'DELETE',
                      headers: {
                          'Authorization': `Bearer ${Token} `,
                          'projectID': PROJECT_ID
                      }
                  } 
                  )
                   const datas  = await responce.json();
                   console.log(datas);
                   const message = datas.message;
                   enqueueSnackbar(message, {
                  
                   });
                   if(datas.status == 'success'){
                      setLikeCount((p)=>p-1)
                  }
                
              }catch (err) {
                      console.error(err);
                  }
              
              }
          
          }
          >
            <ArrowDownwardIcon ></ArrowDownwardIcon>
          </IconButton>


        </Stack>
        <p>{commentdata?.data?.content}</p>
        <div
          className="reddit_clone-comment_close_icon"
          onClick={() => {
            navigate("/");
          }}
        >
          <AiOutlineClose  className="reddit_clone-coment_close_X" />{" "}
          <p >Close</p>
        </div>
      </div>
      <div
        className="reddit_clone-comment_cover"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >

        <div className="reddit_clone-comment">
          <div className="reddit_clone-comment_post">
            <Stack direction="row" spacing={0} >

              <Item sx={{ flexShrink: '1', borderRadius: '0px', bgcolor: 'white', boxShadow: 'none' }}>
                <Stack direction="column" spacing={1}>


                  <IconButton
                    size="medium"
                    aria-label="show more"
                    aria-haspopup="true"
                    color="inherit"
                    disableTouchRipple
                    sx={{ borderRadius: 0, p: '0' }}
                    onClick={ 
                        
                      async  () => {  
                         
                        const Token = JSON.parse(localStorage.getItem("reddit_token"));
                          try { 
                              const responce =  await fetch(`https://academics.newtonschool.co/api/v1/reddit/like/${postId}`,{
                                  method: 'POST',
                                  headers: {
                                  'Authorization':`Bearer ${Token} `,
                                  'projectID': PROJECT_ID
                              },
                            
                          })
                          const data = await responce.json();
                          console.log(data);
                           const message = data.message;
                          //  handleClickVariant('info')
                          enqueueSnackbar(message, {
                          
                            });
                         
                          if(data.status == 'success'){
                              setLikeCount((p)=>p+1)
                             
                          }
                          
                         
                      }catch (err) {
                              console.error(err);
                          }
                      
                      }
                  
                  }
                  >
                    <ArrowUpwardIcon></ArrowUpwardIcon>
                  </IconButton>
                  <Typography sx={{ mt: '0', fontWeight: '800', fontSize: '13px' }} variant='p'>{likeCount}</Typography>


                  <IconButton
                    size="medium"
                    aria-label="show more"
                    aria-haspopup="true"
                    color="inherit"
                    disableTouchRipple
                    sx={{ borderRadius: 0, p: '0' }}
                    onClick={
                      async  () => {
                          const Token = JSON.parse(localStorage.getItem("reddit_token"));
                          try { const responce =  await fetch(`https://academics.newtonschool.co/api/v1/reddit/like/${postId}`,{
                              method: 'DELETE',
                              headers: {
                                  'Authorization': `Bearer ${Token} `,
                                  'projectID': PROJECT_ID
                              }
                          } 
                          )
                           const datas  = await responce.json();
                           console.log(datas);
                           const message = datas.message;
                           enqueueSnackbar(message, {
                          
                           });
                           if(datas.status == 'success'){
                              setLikeCount((p)=>p-1)
                          }
                        
                      }catch (err) {
                              console.error(err);
                          }
                      
                      }
                  
                  }
                  >
                    <ArrowDownwardIcon ></ArrowDownwardIcon>
                  </IconButton>
                  {/* </Item> */}

                </Stack>
              </Item>


              <Item sx={{ flexGrow: '2', borderRadius: '0px', p: '0', boxShadow: 'none' }}>
                <Stack direction="column" spacing={0}>
                  <Item sx={{ p: '0px', boxShadow: 'none', bgcolor: 'red' }}>
                    <Stack direction="column" spacing={0} >
                      <Item sx={{ height: '22px', boxShadow: 'none', }}>
                        <Stack direction="row" spacing={0} >
                          <Item sx={{ p: "0", boxShadow: 'none' }}>
                            <Avatar
                              alt="Remy Sharp"
                              src={commentdata?.data?.channelImage}
                              sx={{ width: 22, height: 22, }}

                            />
                          </Item>
                          <Item >
                            <Link href="#" color="inherit">
                              {commentdata?.data?.channelName}
                            </Link>
                          </Item>
                          <Item sx={{ p: '0px', boxShadow: 'none', }}>
                            <Typography sx={{ pt: '7px' }} variant='body2'>{`Posted by u/${commentdata?.data?.authorName}`} <span style={{ fontWeight: 400, marginLeft: "5px" }}>
                              2days ago
                            </span></Typography>
                          </Item>
                        </Stack>
                      </Item>

                    </Stack>
                  </Item>
                  <Item sx={{ p: '0', mt: '10px', boxShadow: 'none' }}>

                    <Stack direction="column" spacing={0}>

                      <Item sx={{ boxShadow: 'none', }}>

                        <Typography align='left' variant='h5'></Typography>
                        <Typography align='left' variant='h6'>{commentdata?.data?.content}</Typography>

                      </Item>

                      <CardMedia
                        component="img"
                        alt={`Can't load image please refresh...{${commentdata?.data?.author?.name}'post}`}
                        height="40%"
                        src={commentdata?.data?.postImage}
                      />

                    </Stack>
                  </Item>
                  <Item sx={{ p: '0', boxShadow: 'none' }}>

                    {/* comments box */}

                    <Stack direction="row" spacing={2} >
                      <Item sx={{ boxShadow: 'none' }}>

                        {/* <Link to={`/comments/${id}`}> */}
                        <IconButton
                          size="medium"
                          aria-label="show more"
                          aria-haspopup="true"
                          color="inherit"
                          disableRipple
                          sx={{ borderRadius: 0, p: '0', Mr: '10px', ml: '0px' }}
                        >
                          <ChatBubbleOutlineOutlinedIcon></ChatBubbleOutlineOutlinedIcon>

                          <Typography>{`${commentdata?.data?.commentsCount}Comments`}</Typography>
                        </IconButton>

                        <IconButton
                          size="medium"
                          aria-label="show more"
                          aria-haspopup="true"
                          color="inherit"
                          disableTouchRipple
                          sx={{ borderRadius: 0, p: '0', Mr: '10px', ml: '10px' }}
                        >
                          <ShortcutOutlinedIcon></ShortcutOutlinedIcon>

                          <Typography>Share</Typography>
                        </IconButton>
                        <IconButton
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

                        </IconButton>
                        {/* </Link> */}
                      </Item>
                    </Stack>
                  </Item>
                </Stack>
              </Item>


            </Stack>






            <div className="reddit_clone-comment_area">
              <p>
                Comment as <span>{userName}</span>
              </p>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="what are your thoughts"
                ref={inpRef}
              ></textarea>

            </div>

            <div className="reddit_clone-comment_btn">
              <button onClick={handleComment}>comment</button>
            </div>
            <br></br>
            <h4>Top Comments</h4>


            <Divider  ></Divider>
            {/* <hr></hr> */}
            {loading && <Loader />}

            <div className="reddit_clone-comment_past_comment">


              {comment?.map((comment, i) => {

                {console.log(comment)}
                

                return (
                  <MakeComment key={i}
                    textArea={comment.content}
                    createdAt={comment.createdAt}
                    commts={comment.children}
                    userPhoto={img}
                    authorId={comment.author}
                  ></MakeComment>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
