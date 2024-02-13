import React from "react";
import img from "../../images/default_avatar.png";
// import "./notificationsSmall.css";
import { useDispatch } from "react-redux";
import { navdropmenu } from "../../action";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Button, IconButton, Typography } from "@mui/material";
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));




const Notification = () => {

  const dispatch = useDispatch()

  return (
    <Stack spacing={2} direction="column">
        <Item sx={{width:'385px' ,boxShadow:'none'}}>

            <Stack direction="row">
        <Typography sx={{fontWeight:'bolder' , textAlign:'start',}}>Notifications</Typography>

        
            <Typography sx={{ fontWeight:'bolder' , textAlign:'end' , ml:'38%',mr:'8px'}}>Messages</Typography>
            <BeenhereOutlinedIcon></BeenhereOutlinedIcon>
            <SettingsOutlinedIcon></SettingsOutlinedIcon>
        

            </Stack>

         

        </Item>


        <Item sx={{width:'385px' , boxShadow:'none'}}>

        <img style={{marginTop:'25px'}} src={img} alt="" width={110} height={150} />

        </Item>
        <Item sx={{width:'385px'  ,boxShadow:'none'}}>
          
        <Typography sx={{ color:"black" , fontWeight:'bolder' , textAlign:'center' }}>You don’t have any activity yet</Typography>

        </Item>
        <Item sx={{width:'385px' ,boxShadow:'none'}}>

         <Typography  style={{textAlign:'center'}}>
          That’s ok, maybe you just need the 
         
         </Typography>
         <Typography  style={{textAlign:'center'}}>
         right inspiration. Try posting in
         
         </Typography>
         <Typography  style={{textAlign:'center'}}>
         r/Old_Recipes , a popular community
         
         </Typography>
         <Typography  style={{textAlign:'center'}}>
         for discussion.
         
         </Typography>

        </Item>
 
    </Stack>

  )
}
    
      

export default Notification;
