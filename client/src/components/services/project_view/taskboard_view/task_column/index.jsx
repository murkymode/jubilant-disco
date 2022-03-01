/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import AddTask from '../../../project_hud/AddTask';

import TaskCard from '../task_card';

export default function TaskColumn({ column, columnID }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
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
      {column.title}
      <br />
      {column.info}
      <br />
      {'Tasks include: '}
      {column.tasks.map(
        (task) => (
          <TaskCard
            columnID={columnID}
            key={task._id}
            task={task}
          />
        ),
      )}
      <AddTask columnID={columnID} />
    </div>
  );
}
