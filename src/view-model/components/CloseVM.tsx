import DashboardCardSelector from "../../model/DashboardCardSelector";
import Close from "../../view/components/Close";

function CloseVM() {
  return <Close onClose={() => DashboardCardSelector.set("none")} />;
}

export default CloseVM;
