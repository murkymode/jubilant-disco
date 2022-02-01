import React, { useState } from 'react';

export default function NewColumn() {
  const [formData, setFormData] = useState({
    title: '',
    info: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const info = e.target[1].value;
    setFormData({
      title,
      info,
    });
  };

  return (
    <div
      style={{
        // minHeight: '60px',
        // maxHeight: '60px',
        fontSize: '4em',
      }}
    >
      <form onSubmit={handleSubmit}>
        <input placeholder="Column title" />
        <br />
        <input placeholder="Column info" />
        <br />
        <button type="submit">✚</button>
      </form>
    </div>
  );
}
