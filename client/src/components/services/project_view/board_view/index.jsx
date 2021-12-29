import React, { useState } from 'react';

import Column from './task_column';

export default function Taskboard() {
  const [columns, setColumns] = useState([
    {
      title: 'step 1',
      tasks: [
        {
          title: 'thing 1',
        },
      ],
    },
    {
      title: 'step 2',
      tasks: [
        {
          title: 'thing 2',
        },
      ],
    },
    {
      title: 'step 3',
      tasks: [
        {
          title: 'thing 3',
        },
      ],
    },
  ]);
  return (
    <div>
      {columns.map((column) => <Column column={column} />)}
    </div>
  );
}
