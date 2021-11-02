import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Splash() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > :not(style)': {
          backgroundColor: '#131313',
          m: 1,
          width: '60vw',
          height: 128,
        },
      }}
    >
      <Paper elevation={4} />
    </Box>
  );
}
