import React from "react";
import s from "./GoBackBtn.module.scss";
import { useNavigate } from "react-router-dom";

const GoBackBtn = () => {
  const navigate = useNavigate();

  return (
    <button className={s.btn} onClick={() => navigate(-1)}>
      Назад
    </button>
  );
};

export default GoBackBtn;
