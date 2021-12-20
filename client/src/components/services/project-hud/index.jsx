import React, { useState } from 'react';
import {
  Box, Typography,
} from '@mui/material';

/* components */
import ActivityList from './ActivityList';

export default function ProjectHUD() {
  const [display, setDisplay] = useState('');

  const handleClick = (e) => {
    setDisplay(`${e.target.innerText}`);
    console.log(`Hey it's: ${display}!`);
  };

  return (
    <Box
      style={{
        display: 'flex',
        backgroundColor: '#131313',
        flexDirection: 'column',
        padding: '1em',
        width: '30vw',
        height: '95%',
        border: '1px solid grey',
      }}
    >
      <Typography variant="h4">Project HUD</Typography>
      {/* <ProjectStats /> */}
      <ActivityList handleClick={handleClick} />
    </Box>
  );
}
