import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <button
      type="button"
      style={{
        backgroundColor: '#131313',
      }}
    >
      <Link to="/">
        Projects
      </Link>
    </button>
  );
}
