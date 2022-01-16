import * as React from 'react';
import axios from 'axios';
import {
  Paper, TextField, Box, Button,
} from '@mui/material';

export default function AddProject() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const info = e.target[2].value;

    const request = {
      title,
      info,
    };

    axios.post('/api/projects', request)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          },
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
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
          <button style={{ fontSize: '4em', padding: '0.3em' }} type="submit">+</button>
        </form>
      </Paper>
    </Box>
  );
}
