import * as React from 'react';
import {
  Box,
} from '@mui/material';

import HomeButton from '../services/home-button';
import TitleBar from '../services/title-bar';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        border: '2px solid blue',
        width: '100%',
        '& > :not(style)': {
          backgroundColor: '#131313',
          m: 1,
        },
      }}
    >
      <TitleBar />
      <HomeButton />
    </Box>
  );
}
