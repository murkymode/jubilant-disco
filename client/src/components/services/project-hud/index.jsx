import * as React from 'react';
import {
  Box, Typography,
} from '@mui/material';

/* components */

export default function ProjectHUD() {
  return (
    <Box
      style={{
        display: 'flex',
        backgroundColor: '#131313',
        padding: '1em',
        width: '30vw',
        height: '95%',
        border: '1px solid grey',
      }}
    >
      <Typography variant="h4">Project HUD</Typography>
    </Box>
  );
}
