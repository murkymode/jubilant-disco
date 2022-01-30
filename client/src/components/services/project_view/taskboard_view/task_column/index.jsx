/* eslint-disable react/prop-types */
import React from 'react';

import TaskCard from '../task_card';

export default function TaskColumn({ column }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        minWidth: '15em',
        height: '35em',
        margin: '1em',
        padding: '0.5em',
        border: '1px solid grey',
        borderRadius: '0.5em',
        overflow: 'auto',
      }}
    >
      {`Hello from ${column.title}`}
      <br />
      {'Tasks include: '}
      {column.tasks.map((task) => <TaskCard key={task._id} task={task} />)}
    </div>
  );
}
