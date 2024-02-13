import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import  './style.css' ;





export default function Dropdown() {

  
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <div>
        
        <FormControl sx={{ m: 0, width: "17em",border:'none' , '&: hover': {border:'none', outline:'none'} }}>
          <Select
            
            value={age}
            onChange={handleChange}
            displayEmpty
            variant="outlined"  
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{height: '45px' }}
          >
            <MenuItem value="" >
              <em ><HomeRoundedIcon/><span> Home</span></em>
            </MenuItem>
            <MenuItem value={10}  ><HomeRoundedIcon fontSize='medium'/>  Home</MenuItem>
            <MenuItem value={20}><ArrowOutwardIcon fontSize='medium'/> Popular</MenuItem>
            <MenuItem value={30}><SignalCellularAltOutlinedIcon fontSize='medium'/> All</MenuItem>
            <div className='dropdown'> sssss</div>
          </Select>
          
        </FormControl>
      </div>
    );
}