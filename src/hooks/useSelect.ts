import { useEffect, useRef, useState } from "react";

export const useSelect = (optionClicked?: (...params: any[]) => void) => {
  const [open, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onOptionClick = (...args: any[]) => {
    setIsOpen(false);
    optionClicked && optionClicked(...args);
  };

  return {
    open,
    setIsOpen,
    wrapperRef,
    onOptionClick,
  };
};
