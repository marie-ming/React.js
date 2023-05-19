import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const TodoAdd = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      setText('');
      return;
    }

    onAdd({ id: uuid(), text, status: false });
    setText('');
  };

  return (
    <form>
      <input
        type='text'
        placeholder='Add Todo'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handlerSubmit}>Add</button>
    </form>
  );
};

export default TodoAdd;
