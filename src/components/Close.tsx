import { X } from "react-feather";
import DashboardCardSelector from "../model/DashboardCardSelector";

function Close() {
  return (
    <span
      className="close"
      onClick={(e) => {
        e.stopPropagation();
        DashboardCardSelector.set("none");
      }}
    >
      <X />
    </span>
  );
}

export default Close;
