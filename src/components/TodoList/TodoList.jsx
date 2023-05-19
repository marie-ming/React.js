import React, { useState, useEffect } from 'react';
import TodoAdd from '../TodoAdd/TodoAdd';
import Todo from '../Todo/Todo';

const TodoList = ({ cate }) => {
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

  const filtered = getFilteredList(list, cate);

  return (
    <section>
      <ul>
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

function getFilteredList(list, cate) {
  if (cate === 'all') return list;

  const filter = list.filter((item) =>
    cate === 'completed' ? item.status : !item.status
  );

  return filter;
}
