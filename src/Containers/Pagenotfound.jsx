import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import notfoundimg from "../images/reddit404d.png";

const ErrorPage = () => {
  return (
    <Stack
      direction="column"
      gap={1}
      justifyContent="center"
      alignItems="center"
      sx={{bgcolor:'white' ,mt:'0px',height:'100vh' }}
    >
      <img src={notfoundimg} height="40%" width="28%" alt="Page Not found" />
      <Box
        textAlign="center"
        sx={{ fontFamily: 'Verdana Arial Helvetica "Sans-serif"' }}
      >
        <Typography variant="h6">page not found</Typography>
        <Typography variant="body2">
          the page you requested does not exist
        </Typography>
      </Box>
    </Stack>
  );
};

export default ErrorPage;
