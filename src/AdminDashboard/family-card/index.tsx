import Preview from "./preview";
import Content from "./content";
import DashboardCard from "../../DashboardCard";

export interface Props {
  isSelected: boolean;
}

export function FamilyCard({ isSelected }: Props) {
  return (
    <DashboardCard
      title="Familles"
      type="square"
      position="left"
      isSelected={isSelected}
      onClick={() => "family"}
      onCloseModal={() => "none"}
      preview={<Preview />}
      content={<Content />}
    />
  );
}

export default FamilyCard;
