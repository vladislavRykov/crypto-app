import React from "react";
import s from "./NotFound.module.scss";
import GoBackBtn from "@/components/shared/Buttons/GoBackBtn/GoBackBtn";

const NotFound = () => {
  return (
    <div className={s.notFound}>
      <div className={s.notFound_message}>
        <div className={s.notFound_status}>404</div>
        <p>Страница не найдена</p>
      </div>
      <GoBackBtn />
    </div>
  );
};

export default NotFound;
