/* eslint-disable react/prop-types */
import React from 'react';
import {
  Box, Typography,
} from '@mui/material';

/* components */
import ActivityList from './ActivityList';

export default function ProjectHUD({ handleClick }) {
  return (
    <Box
      style={{
        backgroundColor: '#131313',
        flexDirection: 'column',
        padding: '1em',
        width: '30vw',
        height: '76vh',
        border: '1px solid grey',
      }}
    >
      <Typography variant="h4">Project HUD</Typography>
      <ActivityList handleClick={handleClick} />
    </Box>
  );
}
