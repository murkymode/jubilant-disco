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
        justifyContent: 'center',
        backgroundColor: '#131313',
        width: '30vw',
        height: '9vh',
        borderLeft: '1px solid grey',
        borderTop: '1px solid grey',
        borderRight: '1px solid grey',
      }}
    >
      <TextField
        variant="outlined"
        placeholder="SEARCH"
        style={{
          width: '25em',
          justifyContent: 'center',
        }}
      >
        Search
      </TextField>
    </Box>
  );
}
