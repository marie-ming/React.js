import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

const Todo = ({ todo, onUpdate, onDelete }) => {
  const { text, status } = todo;

  return (
    <li>
      <form>
        <input
          type='checkbox'
          id='checkbox'
          checked={status}
          onChange={(e) => onUpdate({ ...todo, status: e.target.checked })}
        />
        {text}
        <button onClick={() => onDelete(todo)}>
          <HiOutlineTrash />
        </button>
      </form>
    </li>
  );
};

export default Todo;
