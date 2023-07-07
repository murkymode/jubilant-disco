import React from 'react';

import HomeButton from './HomeButton';

export default function TitleBar() {
  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: '#f2f2f2',
        justifyContent: 'space-between',
        padding: '1em',
        margin: '0',
      }}
    >
      <HomeButton />
      <h2 style={{ fontWeight: 'bolder' }}>Task Attack</h2>
    </div>
  );
}
