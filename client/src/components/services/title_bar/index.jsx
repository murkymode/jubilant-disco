import * as React from 'react';
import {
  Box, Typography,
} from '@mui/material';

import HomeButton from '../home_button';

export default function TitleBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: '#131313',
        justifyContent: 'space-between',
        padding: '1em',
        margin: '0',
      }}
    >
      <HomeButton />
      <Typography variant="h2">Task Attack</Typography>
    </Box>
  );
}
