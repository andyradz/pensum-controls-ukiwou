import { useCallback, useState } from 'react';

/**
 * Usefull hook to operates on array collection
 */
export default function useArray(initial) {
  const [items, setItems] = useState(initial);

  return {
    items,
    setItems,
    /**
     * [insertAsFirst This method adds item as first in to the array]
     * @param  {[Object]} item [New item to add in array]
     * @return {[undefinied]}  [Return nothing]
     */
    insertAsFirst: useCallback(element => setItems(item => [item, ...items])),

    /**
     * [clearAll This method clears all items of array ]
     * @return {[undefinied]}  [Return nothing]
     */
    clearAll: useCallback(element => setItems(() => [])),

    /**
     * [removeByIndex This method remove item by its index from array  ]
     * @param  {[Number]} item [ Item index of array ]
     * @return {[undefinied]}  [Return nothing]
     */
    removeByIndex: useCallback(index =>
      setItems(items => {
        return items.slice(index + 1, items.length);
      })
    ),

    /**
     * [removeById This method remove item like object by its id from array  ]
     * @param  {[Number]} item [ Id of object ]
     * @return {[undefinied]}  [Return nothing]
     */
    removeById: useCallback(id =>
      setItems(items => items.filter(v => v && v.id !== id))
    )
  };
}
