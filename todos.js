import React from 'react';
import useArray from './useArray';

export default function ToDoManager() {
  const todos = useArray(['hi there', 'sup', 'world', 'mama', 'tata']);

  return (
    <div>
      <h3>TODOS</h3>
      <button onClick={() => todos.insertAsFirst(Math.random())}>Add</button>
      <ul>
        {todos.items.map((item, id) => (
          <li key={id}>
            {item}
            <button onClick={() => todos.removeByIndex(id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => todos.clearAll()}>Clear All</button>
    </div>
  );
}
