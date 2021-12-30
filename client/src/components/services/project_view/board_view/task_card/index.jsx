/* eslint-disable react/prop-types */
import React from 'react';

export default function TaskCard({ task }) {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '6rem',
        marginBottom: '1em',
        padding: '.5em',
        border: '1px solid grey',
        borderRadius: '5px',
      }}
    >
      {`Hello from ${task.title}`}
      <br />
      {/* {`${task.info}`} */}
    </div>
  );
}
