import { useEffect, useRef, useState } from "react";

type useScrollPaginationT = {
  loadMore: () => void;
  ref: React.RefObject<HTMLDivElement | null>;
  deps?: any[];
};

export const useScrollPagination = ({
  loadMore,
  deps = [],
  ref,
}: useScrollPaginationT) => {
  const [isNearBottom, setIsNearBottom] = useState<boolean>(false);
  console.log(123);
  useEffect(() => {
    setIsNearBottom(false);
    const el = ref.current;
    if (!el) return;
    console.log(122223);
    const handleScroll = () => {
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 100) {
        setIsNearBottom(true);
        console.log("Низ блока");
        loadMore();
      }
    };

    el.addEventListener("scroll", handleScroll);

    return () => el.removeEventListener("scroll", handleScroll);
  }, [...deps, loadMore]);

  return { isNearBottom };
};
