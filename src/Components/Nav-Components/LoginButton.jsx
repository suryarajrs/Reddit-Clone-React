import React from "react";
import { deepOrange } from "@mui/material/colors";



import { Fab, Tooltip } from "@mui/material";
import CustomTheme from "../CustomTheme";

const primaryColor = deepOrange[500];
const LoginButton = () => {


  return (
    <>
      {(
        <CustomTheme primaryColor={primaryColor} secondaryColor={primaryColor}>
          <Tooltip  title="Login to Reddit">
            <Fab color="primary" sx={{boxShadow:'none'}}  variant="extended" aria-label="Create Post">
              Login
            </Fab>
          </Tooltip>
        </CustomTheme>
      )}
    </>
  );
};

export default LoginButton;
