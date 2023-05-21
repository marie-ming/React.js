import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [cate, setCate] = useState(category[0]);

  return (
    <>
      <Header category={category} cate={cate} setCate={setCate} />
      <TodoList cate={cate} />
    </>
  );
}

export default App;

const category = ['all', 'active', 'completed'];
