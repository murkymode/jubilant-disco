import React from 'react';
import {
  Box,
} from '@mui/material';

/* components */
import theme from '../../theme';
import AddTask from './AddTask';

const { main } = theme.palette.secondary;

export default function ActionsPanel() {
  return (
    <Box
      sx={{
        minWidth: '100%',
        minHeight: '20vh',
      }}
    >
      Hello from actions
      <AddTask />
    </Box>
  );
}
