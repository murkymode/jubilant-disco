/* eslint-disable react/prop-types */
import React from 'react';

export default function TaskCard({ task }) {
  return (
    <div
      style={{
        minWidth: '4em',
        minHeight: '6rem',
        marginBottom: '1em',
        padding: '0.5em',
        border: '1px solid grey',
        borderRadius: '0.3em',
      }}
    >
      {`Hello from ${task.title}`}
      <br />
      {`${task.info}`}
    </div>
  );
}
