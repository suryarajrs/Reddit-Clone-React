import { Button } from "@mui/material";

import "./ScrollToTop.css"
import { blue } from "@mui/material/colors";




const ScrollToTop = () => {


    return (
        <div className="reddit_clone_ScrollToTop"
            onClick={() => {
                window.scroll(
                    {
                        top: 0,
                        behavior: 'auto',
                    }
                )
            }}
        >
            <Button
                variant="extended"
                color="primary"
                disableTouchRipple
                sx={{  boxShadow: 'none', backgroundColor: 'rgb(0,121,211)', borderRadius: '30px', color: 'white', "&:hover": { bgcolor: blue[600] } , display: {xs:'none' , md:'none' , xl:'block'}}}
                size="small"
                onClick={() => setOpen(true)}
            >
                Back to Top 
            </Button>
        </div>
    );
};

export default ScrollToTop