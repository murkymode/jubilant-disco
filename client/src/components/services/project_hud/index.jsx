/* eslint-disable react/prop-types */
import React from 'react';

/* components */
import ActivityList from './ActivityList';
import ActionsPanel from './ActionsPanel';

export default function ProjectHUD({ handleDisplay }) {
  return (
    <div
      style={{
        backgroundColor: '#131313',
        flexDirection: 'column',
        padding: '1em',
        width: '30vw',
        height: '76vh',
        border: '1px solid grey',
      }}
    >
      <h4>Project HUD</h4>
      <ActionsPanel />
      <ActivityList handleDisplay={handleDisplay} />
    </div>
  );
}
