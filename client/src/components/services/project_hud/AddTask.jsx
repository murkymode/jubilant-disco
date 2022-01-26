import React from 'react';
// import { Box } from '@mui/material';

export default function AddTask({ addTask }) {
  return (
    <div
      style={{
        // minHeight: '60px',
        // maxHeight: '60px',
        fontSize: '4em',
        '&:hover': {
          opacity: [0.9, 0.8, 0.7],
          cursor: 'pointer',
          color: 'green',
        },
      }}
      onClick={addTask}
    >
      ✚
    </div>
  );
}
