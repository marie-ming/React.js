import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './TodoAdd.module.css';

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
    <form className={styles.form}>
      <input
        type='text'
        placeholder='Add Todo'
        className={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className={styles.button} onClick={handlerSubmit}>
        Add
      </button>
    </form>
  );
};

export default TodoAdd;
