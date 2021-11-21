import * as React from 'react';
import {
  Box, TextField,
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
      <TextField variant="outlined">Search</TextField>
    </Box>
  );
}
