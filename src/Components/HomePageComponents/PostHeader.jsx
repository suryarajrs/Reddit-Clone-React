import { Avatar, Button, ClickAwayListener, IconButton, Menu, Typography, styled } from '@mui/material'
import React from 'react'
import Link from '@mui/material/Link';
import { useSelector } from 'react-redux';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import OutlinedFlagTwoToneIcon from '@mui/icons-material/OutlinedFlagTwoTone';
import { showLoginForm } from '../../action';
import {useDispatch} from 'react-redux'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 'none',

}));


const PostHeader = ({ data }) => {
    const dispatch = useDispatch();
    const login = useSelector((store) => store.isLoggedIn);
   
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        dispatch(showLoginForm("Login"))
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <>

            <Stack direction="column" spacing={0}  >
                <Item sx={{ boxShadow: 'none', p: '10px 0px 0px 5px', }}>
                    <Stack direction="row" spacing={0} height={"34px"} >
                        <Item sx={login ? ({ p: "0px", boxShadow: 'none', height: '30px' }) : ({ marginLeft: '22px', })}>
                            <Avatar
                                alt="Remy Sharp"
                                src={data?.post?.channel?.image}
                                sx={{ width: 27, height: 27}}

                            />
                        </Item>
                        <Item sx={{ boxShadow: 'none', }} >
                            <Link href="#" color="inherit">
                                {`r/${data?.post?.channel.name}`}
                            </Link>
                        </Item>
                        <Item sx={{ p: '0px', boxShadow: 'none', pl: '0px' }}>
                            <Typography sx={{ pt: '8px' }} variant='body2'>{`posted by/${data?.post?.author.name}`}  </Typography>
                        </Item>
                        <Item sx={{ boxShadow: 'none', height: '35px', flex: '1' }}   >


                            {login || <Button disableFocusRipple onClick={()=>{dispatch(showLoginForm("Login"))}} sx={{ p: "0px", bgcolor: 'blue', color: 'white', borderRadius: '50px', ml: {xl:'50%'},mr:'7px' ,textTransform: "unset", "&:hover": { backgroundColor: 'blue' } }}>Join</Button>}
                            {login || <><IconButton ref={anchorRef}
                                id="composition-button"
                                aria-controls={open ? 'composition-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleToggle}><MoreHorizOutlinedIcon></MoreHorizOutlinedIcon></IconButton>


                                <Popper
                                    open={open}
                                    anchorEl={anchorRef.current}
                                    role={undefined}
                                    placement="bottom-start"
                                    transition
                                    disablePortal
                                >
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{
                                                transformOrigin:
                                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                                            }}
                                        >
                                            <Paper>
                                                <ClickAwayListener onClickAway={handleClose}>
                                                    <MenuList
                                                        autoFocusItem={open}
                                                        id="composition-menu"
                                                        aria-labelledby="composition-button"
                                                        onKeyDown={handleListKeyDown}
                                                    >
                                                        <MenuItem onClick={handleClose}><OutlinedFlagTwoToneIcon onClick={()=>{dispatch(showLoginForm("Login"))}} sx={{marginRight:'10px'}}></OutlinedFlagTwoToneIcon>Report</MenuItem>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper></>}
                        </Item>


                    </Stack>
                </Item>

            </Stack>
        </>
    )
}

export default PostHeader
