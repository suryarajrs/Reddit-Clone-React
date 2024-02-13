


import React from "react";
import { deepOrange } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import img from "../../images/Redditlogo.png";
const Logo = () => {
    return (
        <>

            <Avatar sx={{ bgcolor: deepOrange[500] , mr:1 }}>
                <img src={img} alt="dd" height={"32px"} />
            </Avatar>

            <Typography variant="h6" display={{xs:'none',sm:'block',md:'block',lg:'block'}}  sx={{ flexGrow: 1 , fontWeight:700 ,fontSize:"30px", color:deepOrange[600] }}>
                reddit
            </Typography>
        </>
    );
};

export default Logo;
