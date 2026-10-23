import type { IconType } from "react-icons";
import { NavLink } from "react-router-dom";
import s from "./SideBar.module.scss";
import cn from "classnames";

type SideBarItemT = {
  option: {
    title: string;
    path: string;
    Icon: IconType;
  };
};

const SideBarItem = ({ option }: SideBarItemT) => {
  return (
    <NavLink
      end={option.path === "/crypto-app"}
      className={({ isActive }) =>
        cn(s.pageLink, { [s.pageLink_active]: isActive })
      }
      to={option.path}
    >
      <div className={s.pageLink_wrapper}>
        <option.Icon size={20} className={s.pageLink_icon} />
        <span className={s.pageLink_title}>{option.title}</span>
      </div>
    </NavLink>
  );
};

export default SideBarItem;
