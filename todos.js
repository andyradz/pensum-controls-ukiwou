import React from 'react';
import useArray from './useArray';

export default function ToDoManager() {
  const todos = useArray(['hi there', 'sup', 'world']);

  return (
    <div>
      <h3>TODOS</h3>
      <button onClick={() => todos.add(Math.random())}>Add</button>
      <ul>
        {todos.items.map((item, id) => (
          <li key={id}>
            {item}
            <button onClick={() => todos.removeByIndex(id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => todos.clear()}>Clear All</button>
    </div>
  );
}
