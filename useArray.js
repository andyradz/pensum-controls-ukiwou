import { React, useCallback, useState } from 'react';

export default function useArray(initial) {
  const [items, setItems] = useState(initial);

  return {
    items,
    setItems,
    add: useCallback(a => setItems(item => [...items, item])),
    clear: useCallback(a => setItems(() => [])),
    removeById: useCallback(id =>
      setItems(items => items.filter(v => v && v.id !== id))
    ),
    removeByIndex: useCallback(index =>
      setItems(items => {
        return items.slice(index + 1, items.length);
      })
    )
  };
}
