import React from 'react';

/* components */
// import theme from '../../theme';
import AddColumn from './AddColumn';

// const { main } = theme.palette.secondary;

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
