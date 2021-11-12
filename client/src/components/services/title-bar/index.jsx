import * as React from 'react';
import {
  Box, Typography,
} from '@mui/material';

export default function TitleBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 1,
      }}
    >
      <Typography variant="h2">Task Attack</Typography>
    </Box>
  );
}
