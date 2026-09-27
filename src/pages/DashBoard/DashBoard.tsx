import MarketGlobal from "./components/MarketGlobal/MarketGlobal";
import TableC from "./components/TableC/TableC";
import s from "./DashBoard.module.scss";

const DashBoard = () => {
  return (
    <div className={s.dashboard}>
      <MarketGlobal />
      <TableC />
    </div>
  );
};

export default DashBoard;
