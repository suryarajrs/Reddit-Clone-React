import React, { useContext } from "react";
import { AiFillHome, AiOutlineMessage, AiOutlinePlus } from "react-icons/ai";
import { BsFileBarGraph, BsShield } from "react-icons/bs";
import { CiCoinInsert } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoShirtOutline } from "react-icons/io5";
import { RiUserSettingsLine } from "react-icons/ri";
import "./notLoggined.css";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Divider, IconButton, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {showLoginForm} from "../../action.js"













const NotLoggedLeftMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector((store) => store.isLoggedIn)





  return (
    <div style={login?({}):({width:'250px',marginTop:'25px',marginLeft:'11%'})} className="reddit_clone-menu">

      <button
        id="1"
        onClick={() => {
          navigate("/");
          window.location.reload(false);
        }}
      >
        {" "}
        <AiFillHome className="react_clone-menu_icons" /> Home
      </button>
      <button
        id="2"
        onClick={() => {
          window.location.reload(false);
          
        }}
      >
        <BsArrowUpRightCircle className="react_clone-menu_icons" /> Popular
      </button>
      <Divider sx={{ mt: '12px' }}></Divider>

      <Accordion sx={{ width: "250px", boxShadow: "none", mt: '12px', }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ width: "250px", height: '30px', "&:hover": { bgcolor: ' rgba(218, 224, 230, 0.5)', borderRadius: '12px' } }}
        >

          <h4 style={{ fontWeight: 'lighter', fontSize: '14px', marginTop: '10px' }}>RECENT</h4>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: 'white', height: '60px', width: '100%' }}>
          {/* <IconButton sx={{width:'100%',"&:hover":{ bgcolor:' rgba(218, 224, 230, 0.5)', borderRadius:'12px'}}}>hello</IconButton> */}
          <ListItem
            sx={{ bgcolor: 'white', height: '40px', width: '225px', mt: '0px' }}
            onClick={()=>{dispatch(showLoginForm("Login"))}}
            disablePadding
          >
            <ListItemButton  disableRipple>
              <ListItemAvatar>
                <Avatar
                  alt={"icon"}
                  src={'https://styles.redditmedia.com/t5_2s30g/styles/communityIcon_wpxjh8fuvcw51.png'}
                />
              </ListItemAvatar>
              <ListItemText primary={`r/NRA2K `} />
            </ListItemButton>
          </ListItem>
        </AccordionDetails>

        <AccordionDetails sx={{ bgcolor: 'white', height: '60px', width: '100%', }}>
          <ListItem
            sx={{ bgcolor: 'white', height: '40px', width: '225px', mt: '0px' , }}
            onClick={()=>{dispatch(showLoginForm("Login"))}}
            disablePadding
          >
            <ListItemButton 
            
            disableRipple>
              <ListItemAvatar>
                <Avatar
                  alt={"icon"}
                  src={"https://styles.redditmedia.com/t5_2s84e/styles/communityIcon_g8xlzjxvilbb1.jpg?format=pjpg&s=904e57327bdb1e8dad5b23a60fbe9344e48719a6"}
                />
              </ListItemAvatar>
              <ListItemText primary={`r/AskMen `} />
            </ListItemButton>
          </ListItem>
        </AccordionDetails>

        <AccordionDetails sx={{ bgcolor: 'white', height: '60px', width: '100%', }}>
          <ListItem
            sx={{ bgcolor: 'white', height: '40px', width: '225px', mt: '0px' }}
            onClick={()=>{dispatch(showLoginForm("Login"))}}
            disablePadding
          >
            <ListItemButton disableRipple>
              <ListItemAvatar>
                <Avatar
                  alt={"icon"}
                  src={"https://styles.redditmedia.com/t5_2qh1f/styles/communityIcon_26udmxwqbrwb1.png"}
                />
              </ListItemAvatar>
              <ListItemText primary={`r/Apple `} />
            </ListItemButton>
          </ListItem>
        </AccordionDetails>
      </Accordion>



      <Accordion sx={{ width: "250px", boxShadow: "none", mt: '12px', }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ width: "250px", height: '30px', mt:"10px", "&:hover": { bgcolor: ' rgba(218, 224, 230, 0.5)', borderRadius: '12px' } }}
        >

          <h4 style={{ fontWeight: 'lighter', fontSize: '14px', marginTop: '10px' }}>TOPICS</h4>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: 'white', height: '60px', width: '100%' }}>
          {/* <IconButton sx={{width:'100%',"&:hover":{ bgcolor:' rgba(218, 224, 230, 0.5)', borderRadius:'12px'}}}>hello</IconButton> */}
          <ListItem
            sx={{ bgcolor: 'white', height: '40px', width: '225px', mt: '0px' }}
            onClick={()=>{dispatch(showLoginForm("Login"))}}
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={"icon"}
                  src={'https://styles.redditmedia.com/t5_2s30g/styles/communityIcon_wpxjh8fuvcw51.png'}
                />
              </ListItemAvatar>
              <ListItemText primary={`r/NRA2K `} />
            </ListItemButton>
          </ListItem>
        </AccordionDetails>

        <AccordionDetails sx={{ bgcolor: 'white', height: '60px', width: '100%', }}>
          <ListItem
            sx={{ bgcolor: 'white', height: '40px', width: '225px', mt: '0px' }}
            onClick={()=>{dispatch(showLoginForm("Login"))}}
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={"icon"}
                  src={"https://styles.redditmedia.com/t5_2s84e/styles/communityIcon_g8xlzjxvilbb1.jpg?format=pjpg&s=904e57327bdb1e8dad5b23a60fbe9344e48719a6"}
                />
              </ListItemAvatar>
              <ListItemText primary={`r/AskMen `} />
            </ListItemButton>
          </ListItem>
        </AccordionDetails>

        <AccordionDetails sx={{ bgcolor: 'white', height: '60px', width: '100%', }}>
          <ListItem
            sx={{ bgcolor: 'white', height: '40px', width: '225px', mt: '0px' }}
            onClick={()=>{dispatch(showLoginForm("Login"))}}
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={"icon"}
                  src={"https://styles.redditmedia.com/t5_2qh1f/styles/communityIcon_26udmxwqbrwb1.png"}
                />
              </ListItemAvatar>
              <ListItemText primary={`r/Apple `} />
            </ListItemButton>
          </ListItem>
        </AccordionDetails>
      </Accordion>
 
      


      <Accordion sx={{ width: "250px", boxShadow: "none", mt: '12px', }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ width: "250px", height: '30px', mt:"10px", "&:hover": { bgcolor: ' rgba(218, 224, 230, 0.5)', borderRadius: '12px' } }}
        >

          <h4 style={{ fontWeight: 'lighter', fontSize: '14px', marginTop: '10px' }}>RESOURCES</h4>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: 'white', height: '60px', width: '100%' }}>
         
        <button id="4" onClick={() => navigate("/comingpage")}>
        <RiUserSettingsLine className="react_clone-menu_icons" /> User Setting
      </button>
        </AccordionDetails>
       
        <AccordionDetails sx={{ bgcolor: 'white', height: '60px', width: '100%', }}>
            <button
        id="6"
        onClick={()=>{dispatch(showLoginForm("Login"))}}
      >
        <AiOutlinePlus className="react_clone-menu_icons" /> Create Post
      </button>
        </AccordionDetails>

        <AccordionDetails sx={{ bgcolor: 'white', height: '60px', width: '100%', }}>
        <button id="7" onClick={()=>{dispatch(showLoginForm("Login"))}}>
        <IoIosNotificationsOutline className="react_clone-menu_icons" />{" "}
        Notifications
      </button>
        </AccordionDetails>
        <AccordionDetails sx={{ bgcolor: 'white', height: '60px', width: '100%', }}>
        <button
        id="5"
        onClick={()=>{dispatch(showLoginForm("Login"))}}
      >
        <AiOutlineMessage className="react_clone-menu_icons" /> Message
      </button>
        </AccordionDetails>
      </Accordion>
      
      <button id="8" onClick={()=>{dispatch(showLoginForm("Login"))}}>
        <CiCoinInsert className="react_clone-menu_icons" /> Coins
      </button>
      <button id="9" onClick={()=>{dispatch(showLoginForm("Login"))}}>
        <BsShield className="react_clone-menu_icons" /> Premium
      </button>
      <button id="10" onClick={()=>{dispatch(showLoginForm("Login"))}}>
        <IoShirtOutline className="react_clone-menu_icons" /> Avatar
      </button>
    </div>
  );
};

export default NotLoggedLeftMenu;
