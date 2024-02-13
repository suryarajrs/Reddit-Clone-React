import { Button,  Stack, Typography, styled ,alpha} from "@mui/material"
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import RocketIcon from "@mui/icons-material/Rocket";
import Brightness5SharpIcon from "@mui/icons-material/Brightness5Sharp";
import IosShareTwoToneIcon from "@mui/icons-material/IosShareTwoTone";
import Paper from '@mui/material/Paper';
import { useSnackbar } from "notistack";
import { useState } from "react";



const Menubar = () => {
    const [open, setOpen] = useState(false);
    const { enqueueSnackbar } = useSnackbar();



    const handleClickVariant = (variant) => () => {
        // variant could be success, error, warning, info, or default
        
    
        setOpen(false);
        enqueueSnackbar('Features Comming soon!', {
          variant
        });
       
      };

    const MenuButton = styled(Button)(({theme})=>({
        backgroundColor: "white",
        padding: theme.spacing(1),
        textAlign: 'center',
        boxShadow: 'none',
        color:"#8C8F91",
        "&:hover":{
            backgroundColor:alpha(theme.palette.common.black, 0.10)
        }
    }))


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: 'none',
        
    }));
    return (
        <>

        
            <Stack direction='row' spacing={0} sx={{m:'5px'}}>
                <Item>
                  

                    <MenuButton disableRipple onClick={handleClickVariant('info')}  sx={{borderRadius:'35px' ,textTransform:'none', }}>

                    <RocketIcon  ></RocketIcon>
                    
                    <Typography sx={{pl:'5px',fontSize:'16px' , fontWeight:'600'}} >Best</Typography>

                    </MenuButton>
              
                                
                          
                            
                </Item>
                <Item>
                <MenuButton disableRipple onClick={handleClickVariant('info')} sx={{borderRadius:'35px' ,textTransform:'none'}}>


                    <LocalFireDepartmentIcon sx={{m:'0px'}} ></LocalFireDepartmentIcon>
                    <Typography sx={{pl:'5px',fontSize:'16px' , fontWeight:'600'}} >Hot</Typography>
                </MenuButton>

                    
                </Item>
                <Item>
               <MenuButton disableRipple onClick={handleClickVariant('info')} sx={{borderRadius:'35px' ,textTransform:'none'}}>


                    <Brightness5SharpIcon></Brightness5SharpIcon>
                    <Typography sx={{pl:'5px',fontSize:'16px' , fontWeight:'600'}} >New</Typography>
               </MenuButton>
               
                </Item>
                <Item>
                <MenuButton disableRipple onClick={handleClickVariant('info')} sx={{borderRadius:'35px' ,textTransform:'none'}}>

                    <IosShareTwoToneIcon></IosShareTwoToneIcon>
                    <Typography sx={{pl:'5px',fontSize:'16px' , fontWeight:'600'}} >Top</Typography>
                

                </MenuButton>
                </Item>

            </Stack>
        
        </>
    )
}

export default Menubar