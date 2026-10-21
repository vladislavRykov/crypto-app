import React from "react";
import type { IconType } from "react-icons";
import s from "./CoinInfo.module.scss";

type LinkItemT = {
  url: string;
  text: string;
  Icon?: IconType;
};

const LinkItem = ({ url, text, Icon }: LinkItemT) => {
  return (
    <a className={s.linkItem} href={url} target="_blank">
      {text}
    </a>
  );
};

export default LinkItem;
