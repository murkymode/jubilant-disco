import React from 'react';
import axios from 'axios';

export default function AddColumn() {
  const handleSubmit = (e) => {
    const currentID = window.sessionStorage.getItem('currentProject');
    const title = e.target[0].value;
    const info = e.target[1].value;

    axios.post('/api/projects/addColumn', { id: currentID, title, info })
      .then((res) => res.send())
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        // minHeight: '60px',
        // maxHeight: '60px',
        fontSize: '4em',
      }}
    >
      <form onSubmit={handleSubmit}>
        <input placeholder="Column title" />
        <br />
        <input placeholder="Column info" />
        <br />
        <button type="submit">✚</button>
      </form>
    </div>
  );
}
