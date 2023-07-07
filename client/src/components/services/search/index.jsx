import React from 'react';

/* components */

export default function Search() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
        width: '100%',
        borderLeft: '1px solid grey',
        borderTop: '1px solid grey',
        borderRight: '1px solid grey',
      }}
    >
      <input
        className="input"
        placeholder="Search"
        style={{
          width: '100%',
          margin: '.5em',
          justifyContent: 'center',
        }}
      />
    </div>
  );
}
