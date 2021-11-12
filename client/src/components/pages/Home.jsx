import * as React from 'react';
import {
  Box,
} from '@mui/material';

import HomeButton from '../services/home-button';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        border: '2px solid blue',
        '& > :not(style)': {
          backgroundColor: '#131313',
          m: 1,
          width: '60vw',
          height: '40vh',
        },
      }}
    >
      <HomeButton />
    </Box>
  );
}
