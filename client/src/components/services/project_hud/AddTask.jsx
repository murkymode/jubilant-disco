import React, { useState } from 'react';

import axios from 'axios';

export default function NewTask({ columnID }) {
  const [expanded, setExpanded] = useState(false);

  const expandForm = () => {
    setExpanded(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const projectID = window.sessionStorage.getItem('currentProject');
    const title = e.target[0].value;
    const info = e.target[1].value;

    axios.post('/api/projects/addTask', {
      projectID, columnID, title, info,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setExpanded(false);
    window.location.reload(false);
  };

  return (
    <div
      style={{
        fontSize: '4em',
      }}
    >
      {!expanded ? <button type="button" onClick={expandForm}>✚</button>
        : (
          <div>
            <form onSubmit={handleSubmit}>
              <input required placeholder="Task title" />
              <br />
              <input placeholder="Task info" />
              <br />
              <button type="submit">✚</button>
            </form>
          </div>
        )}
    </div>
  );
}
