import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Paper, Stack, Button,
} from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > :not(style)': {
          backgroundColor: '#131313',
          m: 1,
          width: '60vw',
          height: '40vh',
        },
      }}
    >
      <Button>
        <Link to="/">Home </Link>
      </Button>
    </Box>
  );
}
