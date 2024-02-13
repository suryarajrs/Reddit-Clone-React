// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Logo from './Logo.jsx';
// import Dropdown from './Dropdown.jsx';
// import SearchBar from './SearchBar.jsx';
// import CallMadeTwoToneIcon from '@mui/icons-material/CallMadeTwoTone';
// import { Button, Container, Tooltip } from '@mui/material';
// import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
// import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
// import LoginButton from './LoginButton';
// import ScanToGetApp from './ScanToGetApp';
// import DotMenu from './DotMenu.jsx';
// import CustomTheme from '../CustomTheme.jsx';
// import { useNavigate } from 'react-router';

// const APP_BAR_PRIMARY_COLOR = "#2a9461";
// const APP_BAR_SECONDARY_COLOR = "#ffffff";




// const Navbar = () => {

//     const navigate = useNavigate()


//     return (
//         <>

//             <CustomTheme
//                 primaryColor={APP_BAR_PRIMARY_COLOR}
//                 secondaryColor={APP_BAR_SECONDARY_COLOR}>
//                 <Box sx={{ flexGrow: 1 , position:'fixed' ,top:'0' , zIndex:'99',width:'100%' , }}>
//                     <AppBar position="static" color='secondary'  sx={{boxShadow:'none'}}  >
//                         <Toolbar>
//                             <IconButton
//                                 size="large"
//                                 edge="start"
//                                 color="inherit"
//                                 aria-label="menu"
//                                 disableRipple
//                                 sx={{ mr: 1 }}

//                                 onClick={()=> {
//                                     window.scroll(
//                                         {top:0,
//                                          behavior: 'auto',
//                                         }
//                                     )

//                                     navigate("/")
//                                 } }
//                             >
//                                 <Logo></Logo>
                          
//                             </IconButton>
//                             {/* <Dropdown></Dropdown> */}
//                             <SearchBar></SearchBar>
                            
//                             <Tooltip title="Popular">
//                             <IconButton
//                                 size="medium"
//                                 aria-label="show more"
//                                 aria-haspopup="true"
//                                 color="inherit"

//                                 sx={{borderRadius:0}}
//                             >
                                
//                             <CallMadeTwoToneIcon color='inherit'></CallMadeTwoToneIcon>
//                             </IconButton>
//                             </Tooltip> *
//                             <Tooltip title="Chat">

//                             <IconButton
//                                 size="medium"
//                                 aria-label="show more"
//                                 aria-haspopup="true"
//                                 color="inherit"

//                                 sx={{borderRadius:0}}
//                             >
//                                 <SmsOutlinedIcon></SmsOutlinedIcon>
                            
//                             </IconButton>
//                             </Tooltip>
//                             <Tooltip title="Notifications">

//                             <IconButton
//                                 size="medium"
//                                 aria-label="show more"
//                                 aria-haspopup="true"
//                                 color="inherit"

//                                 sx={{borderRadius:0}}
//                             >
                                
//                              <NotificationsOutlinedIcon></NotificationsOutlinedIcon>
//                             </IconButton>
//                             </Tooltip>
//                             <Tooltip title="Create Post">

//                             <IconButton
//                                 size="medium"
//                                 aria-label="show more"
//                                 aria-haspopup="true"
//                                 color="inherit"

//                                 sx={{borderRadius:0}}
//                             >
                                
//                              <AddOutlinedIcon></AddOutlinedIcon>
//                             </IconButton>
//                             </Tooltip>
//                             <Tooltip title="Advertise">

//                             <IconButton
//                                 size="medium"
//                                 aria-label="show more"
//                                 aria-haspopup="true"
//                                 color="inherit"

//                                 sx={{borderRadius:0}}
//                             >
                                
//                             <CampaignOutlinedIcon></CampaignOutlinedIcon>
//                             </IconButton>
//                             </Tooltip>



//                             <Container     onClick={() =>{
//                                 console.log('scanClicked');
//                               }}>
//                               <ScanToGetApp
                              
                            
//                               >


//                               </ScanToGetApp>
//                             </Container>

//                             <Container  >
                             
//                             <LoginButton></LoginButton>
//                             </Container>
//                             <DotMenu></DotMenu>
//                         </Toolbar>
//                     </AppBar>
//                 </Box>
//             </CustomTheme>
//         </>
//     )
// }

// export default Navbar