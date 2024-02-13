import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Box,  Skeleton, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import RightSideBar from '../Components/HomePageComponents/RightSideBar.jsx';
import LeftSideBar from '../Components/HomePageComponents/leftSideBar.jsx';
import { useSelector } from 'react-redux';
import LeftSideMenu from '../Components/leftSideMenu/LeftSideMenu.jsx';
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
  const dispatch = useDispatch()
  dispatch(navdropmenu(0))
  const menu = useSelector((store) => store.windowWidth);

  const popularTab = useSelector((store) => store.popularTab);



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

            {popularTab && <Stack direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2} ml={menu ? "16.5%" : "23.5%"} sx={{ mt: '80px', width: '1048px', height: '260px' }} >

              <Item sx={{ bgcolor: 'rgb(218,224,230)' }}>

                <Typography fontWeight={"bold"} >Trending Today</Typography>

              </Item>


              <Item>

                <Stack direction="row" spacing={2} sx={{ bgcolor: 'rgb(218,224,230)' }} flex={1}>

                  <Item>
                  <Box sx={{ height: '200px', width: '250px' ,p:'10px' }}>
                      
                      <Skeleton variant="rectangular"  width={230} height={110} />
                      <Skeleton />
                      <Skeleton width="60%" />
                     
                    </Box>
                  </Item>
                  <Item>
                    <Box sx={{ height: '200px', width: '250px',p:'10px' }}>
                      
                      <Skeleton variant="rectangular" sx={{p:"5px"}} width={230} height={110} />
                      <Skeleton />
                      <Skeleton width="60%" />
                     
                    </Box>
                  </Item>
                  <Item>  <Box sx={{ height: '200px', width: '250px',p:'10px' }}>
                     
                      <Skeleton variant="rectangular" sx={{p:"5px"}} width={230} height={110} />
                      <Skeleton />
                      <Skeleton width="60%" />
                     
                    </Box></Item>
                  <Item>  <Box sx={{ height: '200px', width: '250px',p:'10px' }}>
                    
                      <Skeleton variant="rectangular" sx={{p:"5px"}} width={230} height={110} />
                      <Skeleton />
                      <Skeleton width="60%" />
                     
                    </Box></Item>


                </Stack>
              </Item>


              <Item sx={{ bgcolor: 'rgb(218,224,230)' }}> <Typography fontWeight={"bold"} >Popular Post</Typography></Item>



            </Stack>}

            <Grid item xl={7} >
              <Grid container direction={'row'} justifyContent={'flex-end'}>
                <Grid item  >
                  <Item sx={{ width: { xl: '715px', lg: '715px', md: '715px', sm: '715px', xs: '555px' }, p: '15px', backgroundColor: '#DAE0E6' }}>
                    <LeftSideBar></LeftSideBar>
                  </Item>

                </Grid>
              </Grid>
            </Grid>

            <Grid item xl={5}  >
              <Item sx={{ width: '350px', p: '15px', backgroundColor: '#DAE0E6', alignItems: 'start', display: { xs: 'none', xl: 'block', md: 'block' } }}>
                <RightSideBar ></RightSideBar>
              </Item>
            </Grid>

          </Grid>
        </Grid>

      </Grid>



    </>
  )
}

export default HomePage