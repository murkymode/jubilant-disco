import React, { useState } from 'react';

import Column from './task_column';

export default function Taskboard() {
  const [columns, setColumns] = useState([]);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        overflow: 'auto',
      }}
    >
      {columns.map((column) => <Column key={column.id} column={column} />)}
    </div>
  );
}
