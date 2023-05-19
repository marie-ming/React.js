import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [cate, setCate] = useState(category[0]);

  return (
    <div className='App'>
      <header className='App-header'>
        <Header category={category} cate={cate} setCate={setCate} />
        <TodoList cate={cate} />
      </header>
    </div>
  );
}

export default App;

const category = ['all', 'active', 'completed'];
