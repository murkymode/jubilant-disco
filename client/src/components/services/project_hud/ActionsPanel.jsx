import React from 'react';
import {
  Box,
} from '@mui/material';

/* components */
import theme from '../../theme';

const { main } = theme.palette.secondary;

export default function ActionsPanel() {
  return (
    <Box
      sx={{
        minWidth: '100%',
        minHeight: '20vh',
        '&:hover': {
          // backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      Hello from actions
    </Box>
  );
}
