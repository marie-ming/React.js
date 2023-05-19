import React, { useState, useEffect } from 'react';
import TodoAdd from '../TodoAdd/TodoAdd';
import Todo from '../Todo/Todo';

const TodoList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`data/todo.json`)
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleAdd = (todo) => setList([...list, todo]);
  const handleUpdate = (todo) => {
    setList(list.map((item) => (item.id === todo.id ? todo : item)));
  };
  const handleDelete = (todo) => {
    setList(list.filter((item) => item.id !== todo.id));
  };

  return (
    <section>
      <ul>
        {list.map((item) => (
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

const list = [
  { id: '1', name: '청소하기', status: 'active' },
  { id: '2', name: '드림코딩 강의 듣기', status: 'active' },
  { id: '3', name: '데일리스크럼', status: 'active' },
];
