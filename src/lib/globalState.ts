// src/lib/globalState.ts
import React from "react";

let activeCategory = "All Products";
const listeners = new Set<() => void>();

function setCategory(newCategory: string) {
  activeCategory = newCategory;
  listeners.forEach((listener) => listener());
}

function useGlobalCategory() {
  const [state, setState] = React.useState(activeCategory);

  React.useEffect(() => {
    const unsubscribe = () => setState(activeCategory);
    listeners.add(unsubscribe);
    return () => {
      listeners.delete(unsubscribe);
    };
  }, []);

  return [state, setCategory] as const;
}

export default useGlobalCategory;