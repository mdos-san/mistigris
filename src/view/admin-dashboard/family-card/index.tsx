import DashboardElement from "../../../components/DashboardElement";
import Preview from "./preview";
import Content from "./content";
import DashboardCardSelector from "../../../model/DashboardCardSelector";

interface Props {
  isSelected: boolean;
}

function FamilyCard({ isSelected }: Props) {
  return <DashboardElement title="Familles" type="square" position="left" isSelected={isSelected} onClick={function(): void {
    DashboardCardSelector.set("family")
  }} preview={<Preview />} content={<Content />} />
}

export default FamilyCard;
