import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Paper, Stack, Button,
} from '@mui/material';

import theme from '../theme';

export default function Splash() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > :not(style)': {
          backgroundColor: theme.palette.secondary.main,
          m: 1,
          width: '60vw',
          height: '40vh',
        },
      }}
    >
      <Paper elevation={4}>
        <Stack>
          <Button>
            <Link to="/home">Project 1 </Link>
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
