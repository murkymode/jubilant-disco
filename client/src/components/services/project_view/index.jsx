import * as React from 'react';
import {
  Box, Typography,
} from '@mui/material';

/* components */
import Taskboard from './board_view';
import Calendar from './calendar_view';
import Resources from './resource_view';
import Whiteboard from './whiteboard_view';
import Notes from './notes_view';

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
      {display === 'Notes' ? <Notes /> : null}
    </Box>
  );
}
