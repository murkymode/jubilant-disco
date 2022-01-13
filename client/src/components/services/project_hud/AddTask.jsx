import React from 'react';
import { Box } from '@mui/material';

export default function AddTask({ addTask }) {
  return (
    <Box
      sx={{
        minHeight: '60px',
        maxHeight: '60px',
        fontSize: '4em',
        '&:hover': {
          opacity: [0.9, 0.8, 0.7],
          cursor: 'pointer',
        },
      }}
      onClick={addTask}
    >
      ✚
    </Box>
  );
}
