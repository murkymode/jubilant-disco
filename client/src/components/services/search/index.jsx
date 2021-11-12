import * as React from 'react';
import {
  Box, Typography,
} from '@mui/material';

/* components */

export default function Search() {
  return (
    <Box
      style={{
        display: 'flex',
        backgroundColor: '#131313',
        paddingLeft: '1em',
        width: '30vw',
        height: '3.5em',
        border: '1px solid grey',
      }}
    >
      <Typography variant="h4">Search</Typography>
    </Box>
  );
}
