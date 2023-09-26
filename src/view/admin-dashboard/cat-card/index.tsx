import DashboardElement from "../../../components/DashboardElement";
import Preview from "./preview";
import Content from "./content";
import DashboardCardSelector from "../../../model/DashboardCardSelector";

interface Props {
  isSelected: boolean;
}

function CatCard({ isSelected }: Props) {
  return (
    <DashboardElement
      title="Chats"
      type="square"
      position="middle"
      isSelected={isSelected}
      onClick={function (): void {
        DashboardCardSelector.set("cat");
      }}
      preview={<Preview />}
      content={<Content />}
    />
  );
}

export default CatCard;
