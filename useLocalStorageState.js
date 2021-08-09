import React, { useState, useEffect } from 'react';

export default function useLocalStorageState(key, defaultValue) {
  const [state, setState] = useState(() => {
    let value;

    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultValue)
      );
    } catch (e) {
      value = defaultValue;
    }

    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state]);

  return [state, setState];
}

export default function Licznik(){
const[count,setCount] = useLocalStorageState("pensum",0);
return(
  <div>
    <button onClick={()=> setCount(count+1)}>Increment</button>
    <button onClick={()=> setCount(count-1)}>Decrement</button>
  </div>
);
}