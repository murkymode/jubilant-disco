import * as React from 'react';
import {
  Box, Typography,
} from '@mui/material';

/* components */

export default function ProjectView() {
  return (
    <Box
      style={{
        display: 'flex',
        backgroundColor: '#131313',
        padding: '1em',
        width: '70vw',
        height: '100%',
        border: '1px solid grey',
      }}
    >
      <Typography variant="h4">Project View</Typography>
    </Box>
  );
}
