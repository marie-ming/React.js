import React, { useState, useEffect } from 'react';
import TodoAdd from '../TodoAdd/TodoAdd';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

const TodoList = ({ cate }) => {
  const [list, setList] = useState(readTodosFromLS);

  const handleAdd = (todo) => setList([...list, todo]);
  const handleUpdate = (todo) => {
    setList(list.map((item) => (item.id === todo.id ? todo : item)));
  };
  const handleDelete = (todo) => {
    setList(list.filter((item) => item.id !== todo.id));
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(list));
  }, [list]);

  const filtered = getFilteredList(list, cate);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <TodoAdd onAdd={handleAdd} />
    </section>
  );
};

export default TodoList;

function readTodosFromLS() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getFilteredList(list, cate) {
  if (cate === 'all') return list;

  const filter = list.filter((item) =>
    cate === 'completed' ? item.status : !item.status
  );

  return filter;
}
