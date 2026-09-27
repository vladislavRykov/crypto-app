import { TbArrowBadgeDownFilled, TbArrowBadgeUpFilled } from "react-icons/tb";
import { formatPercent } from "../../../utils/formatPercent";

const ChangeIndicator = ({ percent }: { percent: number }) => {
  return (
    <span>
      <span style={{ color: percent >= 0 ? "green" : "red" }}>
        {percent >= 0 ? (
          <TbArrowBadgeUpFilled color="green" />
        ) : (
          <TbArrowBadgeDownFilled color="red" />
        )}
        {formatPercent(percent)}%
      </span>
    </span>
  );
};

export default ChangeIndicator;
