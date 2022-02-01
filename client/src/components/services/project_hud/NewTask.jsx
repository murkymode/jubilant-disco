import React, { useState } from 'react';

export default function NewTask() {
  const [expanded, setExpanded] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    info: '',
  });

  const expandForm = () => {
    setExpanded(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const info = e.target[1].value;
    setFormData({
      title,
      info,
    });
    setExpanded(false);
  };

  return (
    <div
      style={{
        // minHeight: '60px',
        // maxHeight: '60px',
        fontSize: '4em',
      }}
    >
      {!expanded ? <button type="button" onClick={expandForm}>✚</button>
        : (
          <div>
            <form onSubmit={handleSubmit}>
              <input placeholder="Task title" />
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
