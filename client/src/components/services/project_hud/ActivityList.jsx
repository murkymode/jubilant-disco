import React from 'react';

/* components */

export default function ActivityList({ handleDisplay }) {
  return (
    /* refactor to a map of activities */
    <div
      style={{
        display: 'flex',
        backgroundColor: '#f2f2f2',
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
