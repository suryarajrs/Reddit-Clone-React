import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import LeftSideBar from '../Components/HomePageComponents/leftSideBar.jsx';
import PopularCommunities from '../Components/POPULAR COMMUNITIES/PopularCommunities.jsx';
import NotLoggedLeftMenu from '../Components/NotLogin/NotLoggedLeftMenu.jsx'; 



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'end',
  color: theme.palette.text.secondary,
  flexGrow: 0,
  boxShadow: 'none',
  overflow: 'hidden',
}));




const NotLogginHomePage = () => {

  

  return (
    <>


      <Grid container direction={'row'} spacing={0} justifyContent={'center'} sx={{bgcolor:'white'}}>
        
          <Grid item xl={3}   >
            <Item  >
            <NotLoggedLeftMenu></NotLoggedLeftMenu>
            </Item>
          </Grid>
        
        <Grid item xl={9} >

          <Grid container direction={'row'} spacing={0} sx={{  width:{xl:'1280px' , lg:'1255px', md:'852px',xs:'100%'} }}  >
          
            <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>

              
                <Grid item  borderLeft={"3px solid rgb(234,237,239)"} >
                  <Item  >

                    <LeftSideBar></LeftSideBar>

                  </Item>
                

                </Grid>
              
            </Grid>

            <Grid item xl={4} lg={4} md={4} sm={0}  xs={0} >
              <Item sx={{ width: '360px',mt:'10px',ml:'25px' , height:'100vh'}}>
                <PopularCommunities ></PopularCommunities>
              </Item>
            </Grid>

          </Grid>
        </Grid>

      </Grid>



    </>
  )
}

export default NotLogginHomePage