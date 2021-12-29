/* eslint-disable react/prop-types */
import * as React from 'react';
import {
  Box,
} from '@mui/material';

import TaskCard from '../task_card';

export default function TaskColumn({ column }) {
  return (
    <Box
      style={{
        width: '10rem',
        height: '100%',
        margin: '1em',
      }}
    >
      {`Hello from ${column.title}`}
      <br />
      {'Tasks include: '}
      {column.tasks.map((task) => <TaskCard task={task} />)}
    </Box>
  );
}
