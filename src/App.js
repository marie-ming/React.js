import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  const [cate, setCate] = useState(category[0]);

  return (
    <DarkModeProvider>
      <Header category={category} cate={cate} setCate={setCate} />
      <TodoList cate={cate} />
    </DarkModeProvider>
  );
}

export default App;

const category = ['all', 'active', 'completed'];
