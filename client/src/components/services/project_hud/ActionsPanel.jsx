import React from 'react';

/* components */
import AddColumn from './AddColumn';

export default function ActionsPanel() {
  return (
    <div
      style={{
        minWidth: '100%',
        minHeight: '20vh',
      }}
    >
      <AddColumn />
    </div>
  );
}
