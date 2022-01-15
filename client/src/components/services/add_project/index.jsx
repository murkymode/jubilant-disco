import * as React from 'react';
import axios from 'axios';
import {
  Paper, TextField, Box,
} from '@mui/material';

export default function AddProject() {
  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          backgroundColor: '#131313',
          display: 'flex',
          justifyContent: 'space-evenly',
          '& > :not(style)': {
            m: 1,
            // width: 128,
            // height: 128,
          },
        }}
      >
        <TextField
          id="search-input"
          variant="outlined"
          label="Project Title"
          InputLabelProps={{
            style: { color: 'white' },
          }}
        />
        <TextField
          id="search-input"
          variant="outlined"
          label="Project Description"
          InputLabelProps={{
            style: { color: 'white' },
          }}
        />
      </Paper>
    </Box>
  );
}
