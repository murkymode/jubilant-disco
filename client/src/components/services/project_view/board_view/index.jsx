import React, { useState } from 'react';

import Column from './task_column';

export default function Taskboard() {
  const [columns, setColumns] = useState([
    {
      id: 1,
      title: 'column 1',
      tasks: [
        {
          id: 4,
          title: 'thing 1',
        },
      ],
    },
    {
      id: 2,
      title: 'column 2',
      tasks: [
        {
          id: 5,
          title: 'thing 2',
        },
      ],
    },
    {
      id: 3,
      title: 'column 3',
      tasks: [
        {
          id: 6,
          title: 'thing 3',
        },
      ],
    },
  ]);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        overflow: 'scroll',
      }}
    >
      {columns.map((column) => <Column key={column.id} column={column} />)}
    </div>
  );
}
