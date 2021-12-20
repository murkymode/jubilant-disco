import * as React from 'react';
import {
  Box,
} from '@mui/material';

import TitleBar from '../services/title-bar';
import Search from '../services/search';
import ProjectHUD from '../services/project-hud';
import ProjectView from '../services/project-view';

export default function Home() {
  return (
    <Box
      style={{
        display: 'flex',
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
          <Search />
          <ProjectHUD />
        </Box>
        <Box
          className="project-view"
        >
          <ProjectView />
        </Box>
      </Box>
    </Box>
  );
}
