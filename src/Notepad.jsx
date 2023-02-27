import React, { useState } from 'react';

function Notepad() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea value={text} onChange={handleTextChange} />
    </div>
  );
}

export default Notepad;
