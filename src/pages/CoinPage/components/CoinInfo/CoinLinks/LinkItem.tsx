import type { IconType } from "react-icons";
import s from "./CoinLinks.module.scss";

type LinkItemT = {
  url: string;
  text: string;
  Icon?: IconType;
};

const LinkItem = ({ url, text, Icon }: LinkItemT) => {
  return (
    <a className={s.linkItem} href={url} target="_blank">
      {Icon && <Icon />}
      {text}
    </a>
  );
};

export default LinkItem;
