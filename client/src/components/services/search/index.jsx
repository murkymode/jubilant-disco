import * as React from 'react';
import {
  TextField, Box,
} from '@mui/material';

/* components */

export default function Search() {
  return (
    <Box
      sx={{
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
        id="search-input"
        variant="filled"
        label="Search"
        color="success"
        sx={{
          width: '100%',
          margin: '.5em',
          justifyContent: 'center',
        }}
        InputLabelProps={{
          style: { color: 'white' },
        }}
      />
    </Box>
  );
}
