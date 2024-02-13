import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Avatar, Box,  Divider, Stack, Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import LeftSideMenu from '../Components/leftSideMenu/LeftSideMenu.jsx';
import img from "../images/sadReddit.png";
import CreatePost from '../Components/createPost/CreatePost.jsx';
import { useDispatch } from 'react-redux';
import { navdropmenu } from '../action.js';
 


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'end',
    color: theme.palette.text.secondary,
    flexGrow: 0,
    boxShadow: 'none',
    overflow: 'hidden',
}));




const HomePage = () => {
    const dispatch = useDispatch();
    const menu = useSelector((store) => store.windowWidth);
    dispatch(navdropmenu(5))
  


    return (
        <>



            <Grid container direction={'row'} spacing={0} justifyContent={'center'} >
                {menu && (
                    <Grid item xl={2} >
                        <Item sx={{ width: '215px', backgroundColor: '#DAE0E6', }} >
                            <LeftSideMenu></LeftSideMenu>
                        </Item>
                    </Grid>
                )

                }

                <Grid item xl={menu ? 10 : 12} >



                    <Grid container direction={'row'} spacing={0}  >


                        <Grid item xl={7}  >
                            <Grid container direction={'row'} justifyContent={'flex-end'} >
                                <Grid item  >
                                    <Item sx={{ width: { xl: '815px', lg: '715px', md: '715px', sm: '715px', xs: '555px' }, p: '15px', backgroundColor: '#DAE0E6', }}>
                                        <CreatePost></CreatePost>
                                    </Item>

                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xl={5}  >
                            <Item sx={{ width: '400px', p: '15px', backgroundColor: '#DAE0E6', alignItems: 'start', display: { xs: 'none', xl: 'block', md: 'block' } }}>

                                <Box sx={{ backgroundColor: "#FFF", p: 0, mt: 10, width: '350px', height: '280px', borderRadius: '8px', }}>
                                    <Stack direction="column">

                                        <Item>
                                            <Stack direction="row">

                                                <Item sx={{ p: '15px 10px 15px 20px' }}>

                                                    <Avatar src={img}></Avatar>

                                                </Item>

                                                <Item sx={{ mt: '25px' }}>

                                                    <Typography fontWeight={"bolder"} color={"black"}>Posting to Reddit</Typography>

                                                </Item>


                                            </Stack>

                                        </Item>

                                        <Divider variant="middle"></Divider>




                                        <Item><Typography sx={{textAlign:'start',ml:"20px" , p:'7px'}} color={"black"}>1. Remember the human</Typography></Item>
                                        <Divider variant="middle"></Divider>

                                        <Item> 

                                          <Typography sx={{textAlign:'start',ml:"20px" , p:'7px'}}  color={"black"}>2. Behave like you would in real life</Typography>
                                        </Item>

                                        <Divider variant="middle"></Divider>
                                        <Item><Typography sx={{textAlign:'start',ml:"20px" , p:'7px'}}  color={"black"}>3. Look for the original source of content</Typography></Item>
                                        <Divider variant="middle"></Divider>
                                        <Item><Typography sx={{textAlign:'start',ml:"20px" , p:'7px'}}  color={"black"}>4. Search for duplicates before posting</Typography></Item>
                                        <Divider variant="middle"></Divider>
                                        <Item><Typography sx={{textAlign:'start',ml:"20px" , p:'7px'}}  color={"black"}>4. Read the community’s rules</Typography></Item>
                                        <Divider variant="middle"></Divider>

                                    </Stack>

                                </Box>

                            <Item sx={{width:'350px' , bgcolor:"rgb(218,224,230)",mt:'14px',pr:'25px'}}><Typography sx={{textAlign:"start" ,fontSize:'15px'}}>Please be mindful of reddit's<a style={{color:'rgb(65,151,217)'}} href='https://www.redditinc.com/policies/content-policy'> content policy</a>  and practice good <a style={{color:'rgb(65,151,217)'}}>reddiquette</a></Typography></Item>
                            </Item>

                        </Grid>

                    </Grid>


                </Grid>

            </Grid>



        </>
    )
}

export default HomePage