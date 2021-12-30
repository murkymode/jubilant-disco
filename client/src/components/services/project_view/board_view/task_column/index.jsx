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
        width: '13em',
        height: '35em',
        margin: '1em',
        padding: '.5em',
        border: '1px solid grey',
        borderRadius: '5px',
      }}
    >
      {`Hello from ${column.title}`}
      <br />
      {'Tasks include: '}
      {column.tasks.map((task) => <TaskCard key={task.id} task={task} />)}
    </Box>
  );
}
