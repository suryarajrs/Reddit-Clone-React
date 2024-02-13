import {  useNavigate } from "react-router";
import React, {  useRef,  } from "react";
import "./Nav.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsArrowUpRightCircle, BsChevronDown, BsQrCodeScan, BsQuestionLg, BsShield, } from "react-icons/bs";
import { CiCircleMore, } from "react-icons/ci";
import { useSelector } from "react-redux";

import {  ClickAwayListener, Divider, Grow, IconButton, MenuItem, MenuList, Paper, Popper, Switch, Typography } from "@mui/material";
import { CgLogIn, CgProfile } from "react-icons/cg";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { FiFileText } from "react-icons/fi";
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import { useDispatch } from "react-redux";
import { navdropmenu, popularTab, userLogout } from "../../action";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationSmall from "../notifications/NotificationSmall";
import { useSnackbar } from 'notistack';
import dp from "../../images/displayPicture.png";
import { AiOutlinePlus } from "react-icons/ai";

















const NavLoginIcons = () => {

    const currentUser = useSelector((store) => store.currentUser)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const optionRef = useRef();
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const anchorRef = React.useRef(null);
    const { enqueueSnackbar } = useSnackbar();

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleToggle2 = () => {
        setOpen2((prev) => !prev);
    };
    const handleClickVariant = (variant) => () => {
        // variant could be success, error, warning, info, or default
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
        enqueueSnackbar('Features Comming soon!', {
          variant
        });
      };
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };
    const handleClose2 = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen2(false);
    };
    const handleLogin = async () => {

        dispatch(userLogout())
        localStorage.clear();

 
    };
    function handleListKeyDown(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === "Escape") {
            setOpen(false);
        }
    }








    return (
        <div  className="reddit_clone-nav_icons">
            <div className="reddit_clone-nav_icons_item">


                <IconButton
                    size="medium"
                    aria-label="show more"
                    aria-haspopup="true"

                    disableTouchRipple
                    sx={{ borderRadius: '0px' }}
                    onClick={() => {dispatch(navdropmenu(1)); dispatch(popularTab(true)); navigate("/") }}
                >

                    <BsArrowUpRightCircle ></BsArrowUpRightCircle>

                </IconButton>


         

                <IconButton
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open2 ? "composition-menu" : undefined}
                    aria-expanded={open2 ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle2}
                    disableTouchRipple
                    sx={{ borderRadius: '0px' }}
                >
                    <IoIosNotificationsOutline />
                </IconButton>


                <Popper
                    open={open2}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="right-end"
                    transition
                    disablePortal
                    sx={{ width: "430px", }}
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === "bottom-start" ? "left top" : "left bottom",
                                height: '500px',
                                width: '418px',
                                marginRight: '13px',
                                marginTop: '52px',
                               
                                
                            }}
                        >
                            <Paper >
                                <ClickAwayListener onClickAway={handleClose2}>
                                    <MenuList
                                        autoFocusItem={open2}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}

                                    >
                                        <MenuItem disableTouchRipple onClick={handleClose} > <NotificationSmall></NotificationSmall> </MenuItem>

                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>


                <IconButton
                    disableTouchRipple
                    sx={{ borderRadius: '0px' }}
                    onClick={() => {
                        navigate("/createPost");

                    }}
                >
                    <AiOutlinePlus />
                </IconButton>

                <IconButton
                    disableTouchRipple
                    sx={{ borderRadius: '0px' }}
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <a href="https://accounts.reddit.com/adsregister?dest=https%3A%2F%2Fads.reddit.com%2F&referrer=https%3A%2F%2Fads.reddit.com%2F&utm_source=d2x_consumer&utm_name=top_nav_cta"><CampaignOutlinedIcon /></a>
                </IconButton>




            </div>

            <Paper
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                sx={{ height: "50px", width: {xl:'220px',}, boxShadow: "none", mt: '5px' }}
            >

                <div
                    className="reddit_clone-nav_username"

                    ref={optionRef}
                >
                    <div className="reddit_clone-nav_username_item">
                        <div className="reddit_clone-nav_username_userphoto">
                            {currentUser.photoURL ? (
                                <img
                                    src={currentUser.photoURL}
                                    alt=""
                                    style={{
                                        maxWidth: "2rem",
                                        maxHeight: "2rem",
                                    }}
                                />
                            ) : (
                                <img
                                src={dp}
                                alt=""
                                style={{
                                    maxWidth: "2.8rem",
                                    maxHeight: "3.2rem",
                                }}
                            />
                            )}
                        </div>
                        <div className="reddit_clone-nav_username_user">

                            <p>{currentUser.username}</p>

                    
                            <p>*1 karma</p>
                        </div>
                    </div>
                    <BsChevronDown />

                </div>

            </Paper>

            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
                sx={{ width: "300px", }}
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === "bottom-start" ? "left top" : "left bottom",
                            height: '780px',
                            overflow: 'auto',
                            marginRight: '13px',
                            marginTop: '3px',
                        }}
                    >
                        <Paper >
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}

                                >  


                                    <MenuItem sx={{ p: '10px' }} onClick={handleClose} disabled> <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon><Typography sx={{ ml: '10px', fontWeight: "400", fontSize: '18px', p: '5px 8px 5px 8px' }} >My Stuff</Typography></MenuItem>
                                    <MenuItem onClose={handleClose}  onClick={handleClickVariant('info')} > <Typography sx={{ ml: '10px', fontWeight: "400", fontSize: '18px', p: '5px 8px 5px 8px' }} >Profile</Typography></MenuItem>
                                    <MenuItem onClose={handleClose}  onClick={handleClickVariant('info')} ><Typography sx={{ ml: '10px', fontWeight: "400", fontSize: '18px', p: '5px 8px 5px 8px' }} >Online Status</Typography><Switch defaultChecked /></MenuItem>
                                    <MenuItem onClose={handleClose}  onClick={handleClickVariant('info')} ><Typography sx={{ ml: '10px', fontWeight: "400", fontSize: '18px', p: '5px 8px 5px 8px' }} >Style Avatar</Typography></MenuItem>
                                    <MenuItem onClose={handleClose}  onClick={handleClickVariant('info')} ><Typography sx={{ ml: '10px', fontWeight: "400", fontSize: '18px', p: '5px 8px 5px 8px' }} >User Settings</Typography></MenuItem>
                                    <Divider ></Divider>
                                    <MenuItem onClick={handleClose} disabled> <RemoveRedEyeOutlinedIcon></RemoveRedEyeOutlinedIcon>View Options</MenuItem>
                                    <MenuItem onClose={handleClose} onClick={handleClickVariant('info')}><Typography sx={{ ml: '10px', fontWeight: "400", fontSize: '18px', p: '5px 8px 5px 8px' }} >Dark Mode</Typography> <Switch /></MenuItem>
                                    <Divider ></Divider>
                                    <MenuItem onClose={handleClose}><Typography sx={{ ml: '10px', fontWeight: "400", fontSize: '18px', p: '5px 8px 5px 8px' }} >Create a Community</Typography></MenuItem>
                                    <MenuItem onClose={handleClose}>  <CampaignOutlinedIcon /><a href="https://accounts.reddit.com/adsregister?dest=https%3A%2F%2Fads.reddit.com%2F&referrer=https%3A%2F%2Fads.reddit.com%2F&utm_source=d2x_consumer&utm_name=top_nav_cta"><Typography sx={{ ml: '10px', fontWeight: "400", fontSize: '18px', p: '5px 8px 5px 8px' }} >Advertise on Reddit</Typography></a> </MenuItem>
                                    <MenuItem onClose={handleClose} onClick={()=>navigate("/premium")}>  <BsShield ></BsShield> <Typography sx={{ ml: '10px', fontWeight: "400", fontSize: '18px', p: '5px 8px 5px 8px' }} >Premium</Typography> </MenuItem>
                                    <MenuItem onClose={handleClose} onClick={handleClickVariant('info')}>   <Typography sx={{ ml: '10px', fontWeight: "400", fontSize: '18px', p: '5px 8px 5px 8px' }} >Explore</Typography> </MenuItem>
                                    <MenuItem onClose={handleClose} onClick={handleClickVariant('info')}> <BsQuestionLg />  <Typography sx={{ ml: '10px', fontWeight: "400", fontSize: '18px', p: '5px 8px 5px 8px' }} >Help Center</Typography> </MenuItem>
                                    <MenuItem onClose={handleClose} onClick={handleClickVariant('info')}> <CiCircleMore />  <Typography sx={{ ml: '10px', fontWeight: "400", fontSize: '18px', p: '5px 8px 5px 8px' }} >More</Typography> </MenuItem>
                                    <MenuItem onClose={handleClose} onClick={handleClickVariant('info')}>   <FiFileText />   <Typography sx={{ ml: '10px', fontWeight: "400", fontSize: '18px', p: '5px 8px 5px 8px' }} >Terms & Policies</Typography> </MenuItem>
                                    <MenuItem onClose={handleClose} onClick={handleClickVariant('info')}>   <Typography sx={{ ml: '10px', fontWeight: "400", fontSize: '18px', p: '5px 8px 5px 8px' }} >User Agreement</Typography> </MenuItem>
                                    <MenuItem onClose={handleClose} onClick={handleClickVariant('info')}>   <Typography sx={{ ml: '10px', fontWeight: "400", fontSize: '18px', p: '5px 8px 5px 8px' }} >Privacy Policy</Typography> </MenuItem>
                                    <MenuItem onClose={handleClose} onClick={handleClickVariant('info')}>   <Typography sx={{ ml: '10px', fontWeight: "400", fontSize: '18px', p: '5px 8px 5px 8px' }} >Content Policy</Typography> </MenuItem>

                                    <MenuItem onClose={handleClose} onClick={handleLogin}> <CgLogIn /><Typography sx={{ ml: '10px', fontWeight: "400", fontSize: '18px', p: '5px 8px 5px 8px' }} >Log out</Typography></MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>






        </div>
    );
};


export default NavLoginIcons;