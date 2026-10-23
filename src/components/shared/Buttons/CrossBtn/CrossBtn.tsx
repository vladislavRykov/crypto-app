import { RxCross1 } from "react-icons/rx";
import s from "./CrossBtn.module.scss";

type CrossBtnT = {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  width?: string;
  height?: string;
};

const CrossBtn = ({ onClick, width, height }: CrossBtnT) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={s.crossBtn}
      style={{ width, height }}
    >
      <RxCross1 />
    </button>
  );
};

export default CrossBtn;
