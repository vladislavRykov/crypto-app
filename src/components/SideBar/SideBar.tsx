import React from "react";
import s from "./SideBar.module.scss";
import SideBarItem from "./SideBarItem";
import { sideBarPageLinks } from "./sideBarOptions";
import SearchBar from "./SearchBar/SearchBar";
import Currency from "./Currency/Currency";

const SideBar = () => {
  return (
    <aside className={s.aside}>
      <Currency />
      <SearchBar />
      <div className={s.aside_links}>
        {sideBarPageLinks.map((option) => (
          <SideBarItem option={option} />
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
