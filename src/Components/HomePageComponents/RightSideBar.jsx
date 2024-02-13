import { Box, Button, Divider, Fab, Stack, Typography } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { blue, deepOrange } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import CustomTheme from "../CustomTheme";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { navdropmenu } from "../../action.js"
import "../RightSideFooter/RightSideFooter.css"

import RightSideFooter from "../RightSideFooter/RightSideFooter.jsx";
import { useSnackbar } from "notistack";
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



const RightSideBar = () => {

  const[sticky , setSticky] = useState(false);
  const popularTab = useSelector((store)=> store.popularTab);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();
  
  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    
  
    setOpen(false);
    enqueueSnackbar('Features Comming soon!', {
      variant
    });
   
  };

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 440) {
        
        setSticky(true);
      
      } else {
        setSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (


    <>
      <Stack spacing={3} mt={popularTab? "0px": "65px"} >

        <Item  >
          <CustomTheme
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
          >


            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flexStart",
                alignItems: "start",
                margin: '1px',
              }}
            >

              <SecurityIcon color="primary" fontSize="large" />

              <Box flexGrow={1}>
                <Typography sx={{ display: 'flex', fontSize: '14px', fontWeight: '600', marginLeft: '10px' }} >Reddit Premium</Typography>
                <Typography sx={{ display: 'flex', fontSize: '13px', fontWeight: '600', marginLeft: '10px' }} variant="body2">
                  The best Reddit experience
                </Typography>
              </Box>

            </Stack>
            <Button
              variant="extended"
              color="primary"
              disableElevation
              disableRipple
              sx={{ width: "95%", mt: "2px", boxShadow: 'none', backgroundColor: deepOrange[500], fontSize: '14px', fontWeight: '700', borderRadius: '30px', color: 'white', "&:hover": { bgcolor: deepOrange[400] } }}
              size="small"
              onClick={() => {

                navigate("/premium")
                dispatch(navdropmenu(8))


              }}
            >
              Try Now
            </Button>

          </CustomTheme>
        </Item>

        <Item sx={{ p: 0, }}>
          <Box sx={{ backgroundColor: "#FFF", p: 0, m: 0 }}>
            <Stack

              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                flexWrap: 'wrap',

              }}
            >

              <img
                src="src/images/home-banner@2x.png"
                width="100%"
                height="100%"
                alt="reddit"
              />


              <Box flex={0} sx={{ position: 'relative', top: '0px', ml: '16px' }}>
                <img
                  src="src/images/snoo-home@2x.png"
                  width="50px"
                  height="65px"
                  alt="reddit"
                />
              </Box>
              <Box>
                <Typography sx={{ display: 'flex', fontSize: '16px', fontWeight: '600', marginLeft: '10px', mt: '12px' }} variant="h6">Home</Typography>
              </Box>

            </Stack>


            <Typography sx={{ fontSize: '14px', lineHeight: '22px', fontWeight: '700', wordWrap: 'break-word', mb: '10px', padding: "5px" }}>Your personal Reddit frontpage. Come here to check in with your favorite communities.</Typography>

            <Divider variant="middle"></Divider>
            <Button
              variant="extended"
              color="primary"
              sx={{ width: "90%", mt: "18px", boxShadow: 'none', backgroundColor: 'rgb(0,121,211)', borderRadius: '30px', color: 'white', "&:hover": { bgcolor: blue[600] } }}
              size="small"
              onClick={() => navigate("/createPost")}
            >
              Create Post
            </Button>
            <Button
              variant="extended"
              color="white"
              sx={{ width: "90%", mt: "15px", mb: '15px', boxShadow: 'none', border: '1px solid blue', backgroundColor: '#FFF', color: '#0079D3', borderRadius: '30px', }}
              size="small"
              disableRipple
              onClick={ handleClickVariant('info') }
            >

              <Typography sx={{ fontSize: '12px', fontWeight: '800', letterSpacing: 'unset', textTransform: 'unset', }} >Create Community</Typography>

            </Button>
          </Box>
        </Item>
          




          {sticky&&(<div className="reddit_clone-footer_position">

            <RightSideFooter ></RightSideFooter>
          </div>
          )

          }
          
          { sticky|| <RightSideFooter ></RightSideFooter>}
         
        

        


      </Stack >



    </>

  );
};

export default RightSideBar;



