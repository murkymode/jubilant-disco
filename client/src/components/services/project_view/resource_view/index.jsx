import React from 'react';

export default function Resources() {
  const items = ['many', 'cool', 'strings'];

  return (
    <div>
      <div>Hello from Resources</div>
      <ul>
        {items.map((item) => <li>{item}</li>)}
      </ul>
    </div>
  );
}
