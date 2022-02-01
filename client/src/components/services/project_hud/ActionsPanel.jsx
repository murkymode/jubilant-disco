import React from 'react';

/* components */
// import theme from '../../theme';
import NewColumn from './NewColumn';

// const { main } = theme.palette.secondary;

export default function ActionsPanel() {
  return (
    <div
      style={{
        minWidth: '100%',
        minHeight: '20vh',
      }}
    >
      Hello from actions
      <NewColumn />
    </div>
  );
}
