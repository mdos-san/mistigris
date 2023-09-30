import Preview from "./preview";
import Content from "./content";
import DashboardCard from "../../DashboardCard";

interface Props {
  isSelected: boolean;
}

function AlertCard({ isSelected }: Props) {
  return (
    <DashboardCard
      title="Alertes"
      type="square"
      position="right"
      isSelected={isSelected}
      onClick={() => "alert"}
      onCloseModal={() => "none"}
      preview={<Preview />}
      content={<Content />}
    />
  );
}

export default AlertCard;
