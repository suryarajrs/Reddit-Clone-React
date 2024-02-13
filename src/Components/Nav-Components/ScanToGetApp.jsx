import * as React from 'react';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import Fab from '@mui/material/Fab';



export default function ScanToGetApp() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <Fab variant="extended" sx={{boxShadow:'none'}}>
        <QrCodeScannerIcon sx={{m:0}}></QrCodeScannerIcon>
       Getapp
      </Fab>
  );
}
