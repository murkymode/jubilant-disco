import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Notes() {
  const [value, setValue] = useState('');

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      style={{
        width: '33vw',
        height: '66vh',
        margin: '11px',
      }}
    />
  );
}
