import * as React from 'react';
import {
  Box, Typography,
} from '@mui/material';

/* components */
import Taskboard from './board-view';
import Calendar from './calendar-view';
import Resources from './resource-view';
import Whiteboard from './whiteboard-view';

export default function ProjectView({ display }) {
  return (
    <Box
      style={{
        flexDirection: 'column',
        backgroundColor: '#131313',
        padding: '1em',
        width: '70vw',
        height: '100%',
        borderBottom: '1px solid grey',
        borderTop: '1px solid grey',
        borderRight: '1px solid grey',
      }}
    >
      <Typography variant="h4">Project View</Typography>
      {display === 'Calendar' ? <Calendar /> : null}
      {display === 'Taskboard' ? <Taskboard /> : null}
      {display === 'Resources' ? <Resources /> : null}
      {display === 'Whiteboard' ? <Whiteboard /> : null}
    </Box>
  );
}
