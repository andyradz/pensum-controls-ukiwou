export const useArray = initial => {
  const [items, setItems] = useState(initial);

  return {
    items,
    setItems,
    add: useCallback(a => setItems(item => [...items, item])),
    clear: useCallback(a => setItems(() => [])),
    removeById: useCallback(id =>
      setItems(item => array.filter(v => v && v.id !== id))
    ),
    removeByIndex: useCallback(index =>
      setItems(v => {
        v.slice(index, 1);
        return v;
      })
    )
  };
};
