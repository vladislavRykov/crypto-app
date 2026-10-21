import { TbArrowBadgeDownFilled, TbArrowBadgeUpFilled } from "react-icons/tb";
import { formatPercent } from "../../../utils/formatPercent";

const ChangeIndicator = ({
  percent,
  period,
}: {
  percent: number;
  period?: string;
}) => {
  return (
    <span>
      <span style={{ color: percent >= 0 ? "green" : "red" }}>
        {percent >= 0 ? (
          <TbArrowBadgeUpFilled color="green" />
        ) : (
          <TbArrowBadgeDownFilled color="red" />
        )}
        {formatPercent(percent)}%{period}
      </span>
    </span>
  );
};

export default ChangeIndicator;
