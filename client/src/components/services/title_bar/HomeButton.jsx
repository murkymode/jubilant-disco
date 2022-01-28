import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <button
      type="button"
      style={{
        backgroundColor: '#1c3148',
        minWidth: '10em',
        border: 'none',
        borderRadius: '3%',
      }}
    >
      <Link to="/">
        Projects
      </Link>
    </button>
  );
}
