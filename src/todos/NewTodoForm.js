import React, { useState } from 'react';

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button>create</button>
    </div>
  );
};

export default NewTodoForm;
