/* eslint-disable react/prop-types */
import React from 'react';

import axios from 'axios';

export default function TaskCard({ task }) {
  const handleDeleteTask = (e) => {
    const taskID = e.target.parentNode.id;
    console.log(taskID);
    axios.delete('/api/projects', { data: { id: taskID } });
    // window.location.reload(false);
  };
  return (
    <div
      id={task._id}
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
      <br />
      <button type="button" onClick={handleDeleteTask}>-</button>
    </div>
  );
}
