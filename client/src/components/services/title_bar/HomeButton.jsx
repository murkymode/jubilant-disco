import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <button
      type="button"
      style={{
        backgroundColor: '#f2f2f2',
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
