import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {  deepOrange} from "@mui/material/colors";
import React, { useEffect } from "react";
import CustomTheme from "../CustomTheme";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoginForm } from "../../action";



const primaryColor = deepOrange[500];
const secondaryColor = "#FFF";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none'
}));



const PopularCommunities = () => {



    const dispatch = useDispatch();


    useEffect(() => {
 
    }, []);

    return (


        <>
            <Stack spacing={3} sx={{ mt: '65px', backgroundColor: 'rgb(249,250,250)', }}>

                <Item sx={{ backgroundColor: 'rgb(249,250,250)'}} >

                    <CustomTheme
                        primaryColor={primaryColor}
                        secondaryColor={secondaryColor}
                    >
                        <Typography sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flexStart",
                            alignItems: "start",
                            margin: '1px',
                            fontWeight: 'bold',
                            fontSize: '14px',
                        }} >POPULAR COMMUNITIES</Typography>


                        <Stack
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flexStart",
                                alignItems: "start",
                                margin: '1px',
                            }}
                        >
                            <List sx={{ width: "100%", maxWidth: 360, bgcolor: "rgb(249,250,250)" }}>
                                
                                        <ListItem  id={1} onClick={()=>{dispatch(showLoginForm("Login"))}} disablePadding>
                                            <ListItemButton>
                                                <ListItemAvatar>
                                                    <Avatar
                                                        // alt={}
                                                        src={"https://styles.redditmedia.com/t5_2s30g/styles/communityIcon_wpxjh8fuvcw51.png"}
                                                    />
                                                </ListItemAvatar>
                                                <ListItemText
                                                   
                                                    primary={`r/AskMen`}
                                                    secondary="5,900,902 members"
                                                />
                                                <ListItemText />
                                            </ListItemButton>
                                        </ListItem>

                                        <ListItem  id={1}
                                         disablePadding
                                         onClick={()=>{dispatch(showLoginForm("Login"))}}
                                         >
                                            <ListItemButton>
                                                <ListItemAvatar>
                                                    <Avatar
                                                        // alt={}
                                                        src={'https://styles.redditmedia.com/t5_2rrlp/styles/communityIcon_06pablpo0le21.png'}
                                                    />
                                                </ListItemAvatar>
                                                <ListItemText
                                                   
                                                    primary={`r/PS4`}
                                                    secondary="5,590,602 members"
                                                />
                                                <ListItemText />
                                            </ListItemButton>
                                        </ListItem>

                                        <ListItem  id={1} onClick={()=>{dispatch(showLoginForm("Login"))}} disablePadding>
                                            <ListItemButton>
                                                <ListItemAvatar>
                                                    <Avatar
                                                        // alt={}
                                                        src={"https://styles.redditmedia.com/t5_2qh1f/styles/communityIcon_26udmxwqbrwb1.png"}
                                                    />
                                                </ListItemAvatar>
                                                <ListItemText
                                                   
                                                    primary={`r/Apple`}
                                                    secondary="9,710,192 members"
                                                />
                                                <ListItemText />
                                            </ListItemButton>
                                        </ListItem>

                                        <ListItem  id={1} onClick={()=>{dispatch(showLoginForm("Login"))}} disablePadding>
                                            <ListItemButton>
                                                <ListItemAvatar>
                                                    <Avatar
                                                        // alt={}
                                                        src={"https://styles.redditmedia.com/t5_2s84e/styles/communityIcon_g8xlzjxvilbb1.jpg?format=pjpg&s=904e57327bdb1e8dad5b23a60fbe9344e48719a6"}
                                                    />
                                                </ListItemAvatar>
                                                <ListItemText
                                                   
                                                    primary={`r/NBA2K`}
                                                    secondary="3,800,202 members"
                                                />
                                                <ListItemText />
                                            </ListItemButton>
                                        </ListItem>

                                        <ListItem  id={1} onClick={()=>{dispatch(showLoginForm("Login"))}} disablePadding>
                                            <ListItemButton>
                                                <ListItemAvatar>
                                                    <Avatar
                                                        // alt={}
                                                        src={"https://styles.redditmedia.com/t5_2xbci/styles/communityIcon_32btum6062v91.png"}
                                                    />
                                                </ListItemAvatar>
                                                <ListItemText
                                                   
                                                    primary={`r/Xboxone`}
                                                    secondary="7,708,302 members"
                                                />
                                                <ListItemText />
                                            </ListItemButton>
                                        </ListItem>
                                
                              
                            </List>

                        </Stack>
                    </CustomTheme>
                </Item>






            </Stack >



        </>

    );
};

export default PopularCommunities;



