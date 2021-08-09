import React from 'react';
import { useArray } from './useArray';

const ToDoManager = () => {
  const todos = useArray('hi there', 'sup', 'world');

  return (
    <div>
      <h3>TODOS</h3>
      <button onClick={() => todos.add(Math.random())}>Add</button>
      <ul>
        {todos.itemps.map((item, id) => (
          <li key={id}>
            {item}
            <button onClick={() => todos.removeByIndex(id)}>Clear All</button>
          </li>
        ))}
      </ul>
      <button onClick={() => todos.clear()}>Clear All</button>
    </div>
  );
};

export default ToDoManager;
