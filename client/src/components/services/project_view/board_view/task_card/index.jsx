/* eslint-disable react/prop-types */
import * as React from 'react';
import {
  Box,
} from '@mui/material';

export default function TaskCard({ task }) {
  return (
    <Box
      style={{
        width: '10rem',
        height: '6rem',
      }}
    >
      {`Hello from ${task.title}`}
      <br />
      {/* {`${task.info}`} */}
    </Box>
  );
}
