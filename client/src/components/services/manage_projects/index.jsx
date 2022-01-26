import * as React from 'react';
import axios from 'axios';

export default function AddProject() {
  const handleSubmit = (e) => {
    const title = e.target[0].value;
    const info = e.target[2].value;
    const request = {
      title,
      info,
    };

    axios.post('/api/projects', request)
      .then((response) => {
        response.send();
      })
      .catch((error) => {
        error.send();
      });
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: '#131313',
          display: 'flex',
          justifyContent: 'space-evenly',
          '& > :not(style)': {
            m: 1,
          },
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <input
            required
            className="input"
            placeholder="Project Title"
          />
          <input
            className="input"
            placeholder="Project Description"
          />
          <button style={{ fontSize: '4em', padding: '0.3em' }} type="submit">+</button>
        </form>
      </div>
    </div>
  );
}
