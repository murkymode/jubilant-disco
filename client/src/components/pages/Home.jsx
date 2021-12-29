import React, { useState } from 'react';
import {
  Box,
} from '@mui/material';

import TitleBar from '../services/title_bar';
import Search from '../services/search';
import ProjectHUD from '../services/project_hud';
import ProjectView from '../services/project_view';

export default function Home() {
  const [display, setDisplay] = useState('');

  const handleClick = (e) => {
    setDisplay(`${e.target.innerText}`);
  };

  return (
    <Box
      style={{
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        bottomMargin: '1rem',
      }}
    >
      <TitleBar />
      <Box
        className="workarea"
        style={{
          display: 'flex',
          height: '85vh',
        }}
      >
        <Box
          className="project-HUD"
        >
          <Search style={{ padding: '1rem' }} />
          <ProjectHUD handleClick={handleClick} />
        </Box>
        <Box
          className="project-view"
        >
          <ProjectView display={display} />
        </Box>
      </Box>
    </Box>
  );
}
