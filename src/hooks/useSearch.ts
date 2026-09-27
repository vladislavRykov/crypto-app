import { useState } from "react";
import { useDebouncedValue } from "./simpleHooks";

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
  const { debouncedValue, isUpdating } = useDebouncedValue(value, 800);
  return { value, debouncedValue, isUpdating, onInputChange, setValue };
};
