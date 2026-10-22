import { useEffect, useState } from "react";

export const useDebouncedValue = (value: string, delay: number = 2000) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [isUpdating, setIsUpdating] = useState(false);
  useEffect(() => {
    setIsUpdating(true);
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
      setIsUpdating(false);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value]);

  return { debouncedValue, isUpdating };
};
