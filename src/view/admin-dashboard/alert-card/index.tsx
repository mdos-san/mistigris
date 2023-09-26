import DashboardElement from "../../../components/DashboardElement";
import Preview from "./preview";
import Content from "./content";
import DashboardCardSelector from "../../../model/DashboardCardSelector";

interface Props {
  isSelected: boolean;
}

function AlertCard({ isSelected }: Props) {
  return <DashboardElement title="Alertes" type="square" position="right" isSelected={isSelected} onClick={function(): void {
    DashboardCardSelector.set("alert");
  }} preview={<Preview />} content={<Content />} />
}

export default AlertCard;
