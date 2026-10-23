import s from "./MainLayout.module.scss";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const MainLayout = () => {
  return (
    <main className={s.main}>
      <div className={s.main_wrapper}>
        <div className={s.main_sidebar}>
          <SideBar />
        </div>
        <div className={s.main_page}>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
