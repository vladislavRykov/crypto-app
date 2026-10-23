// components/shared/QueryState/QueryState.tsx

import type { ReactNode } from "react";
import SolfLoader from "@/components/shared/SolfLoading/SolfLoading";

type QueryStateProps = {
  isLoading: boolean;
  isError: boolean;
  hasData: boolean;
  children: ReactNode;
};

const QueryState = ({
  isLoading,
  isError,
  hasData,
  children,
}: QueryStateProps) => {
  if (isError) {
    return <div>Не удалось загрузить данные</div>;
  }

  if (isLoading && !hasData) {
    return <SolfLoader text="Загрузка" weight={500} />;
  }

  if (!hasData) {
    return <div>Данных нет</div>;
  }

  return children;
};

export default QueryState;
