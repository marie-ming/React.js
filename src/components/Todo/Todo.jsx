import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import styles from './Todo.module.css';

const Todo = ({ todo, onUpdate, onDelete }) => {
  const { id, text, status } = todo;

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id={id}
        checked={status}
        onChange={(e) => onUpdate({ ...todo, status: e.target.checked })}
      />
      <label htmlFor={id} className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={() => onDelete(todo)}>
          <HiOutlineTrash />
        </button>
      </span>
    </li>
  );
};

export default Todo;
