/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import axios from 'axios';

export default function NewTask({ columnID }) {
  const [expanded, setExpanded] = useState(false);

  const handleFormVisiblity = () => {
    setExpanded(!expanded);
  };

  /* new task */
  const handleSubmit = (e) => {
    e.preventDefault();
    const projectID = window.sessionStorage.getItem('currentProject');
    const title = e.target[0].value;
    const info = e.target[1].value;

    axios.post('/api/projects/addTask', {
      projectID, columnID, title, info,
    })
      .then((res) => res.send())
      .catch((err) => console.log(err));
    handleFormVisiblity();
    window.location.reload(false);
  };

  return (
    <div
      style={{
        fontSize: '4em',
      }}
    >
      {!expanded ? <button type="button" onClick={handleFormVisiblity}>✚</button>
        : (
          <div>
            <form onSubmit={handleSubmit}>
              <input required placeholder="Task title" />
              <br />
              <input placeholder="Task info" />
              <br />
              <button type="submit">✚</button>
            </form>
            <button type="button" onClick={handleFormVisiblity}>−</button>
          </div>
        )}
    </div>
  );
}
