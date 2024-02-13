import React, { useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { IconButton, Stack, Typography,  } from '@mui/material';
const PROJECT_ID = "bkfxdn6q8uzn";
import { useSnackbar } from 'notistack';





const ArrowBar = ({ data }) => {
    const postId = data?.post?._id
    const [likeCount , setLikeCount] = useState(data?.post?.likeCount)
    const { enqueueSnackbar } = useSnackbar();
   

      const handleClick = () => {
        enqueueSnackbar("hello");
      };
  
    
    return (
        <>
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
                <Typography  sx={{ mt: '0', fontWeight: '800', fontSize: '13px' }} variant='p'>{likeCount}</Typography>
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

        </>
    )
}

export default ArrowBar
