import React, { useState } from 'react';

import Column from './task_column';

export default function Taskboard() {
  const [columns, setColumns] = useState([
    {
      title: 'column 1',
      tasks: [
        {
          title: 'thing 1',
        },
      ],
    },
    {
      title: 'column 2',
      tasks: [
        {
          title: 'thing 2',
        },
      ],
    },
    {
      title: 'column 3',
      tasks: [
        {
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
      }}
    >
      {columns.map((column) => <Column column={column} />)}
    </div>
  );
}
