import React from 'react';

/* components */

export default function ActivityList({ handleDisplay }) {
  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: '#131313',
        flexDirection: 'column',
      }}
    >
      <ul>
        <li>
          <button type="button" onClick={handleDisplay}>
            Taskboard
          </button>
        </li>

        <li>
          <button type="button" onClick={handleDisplay}>
            Calendar
          </button>
        </li>

        <li>
          <button type="button" onClick={handleDisplay}>
            Resources
          </button>
        </li>

        <li>
          <button type="button" onClick={handleDisplay}>
            Whiteboard
          </button>
        </li>

        <li>
          <button type="button" onClick={handleDisplay}>
            Notes
          </button>
        </li>
      </ul>
    </div>
  );
}
