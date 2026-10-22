import { useState } from "react";
import { useDebouncedValue } from "./useDebouncedValue";

export const useSearch = () => {
  const [value, setValue] = useState("");

  const onInputChange: React.ChangeEventHandler<
    HTMLInputElement,
    HTMLInputElement
  > = (e) => {
    setValue(e.target.value);
  };

  return { value, setValue, onInputChange };
};
export const useSearchDebounced = (delay: number = 800) => {
  const { value, setValue, onInputChange } = useSearch();
  const { debouncedValue, isUpdating } = useDebouncedValue(value, delay);
  return { value, debouncedValue, isUpdating, onInputChange, setValue };
};
