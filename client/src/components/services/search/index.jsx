import React from 'react';

/* components */

export default function Search() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#131313',
        width: '100%',
        height: '9vh',
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
