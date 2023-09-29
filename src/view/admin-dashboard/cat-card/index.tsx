import Preview from "./preview";
import Content from "./content";
import DashboardCard from "../../../DashboardCard";

interface Props {
  isSelected: boolean;
}

function CatCard({ isSelected }: Props) {
  return (
    <DashboardCard.view
      title="Chats"
      type="square"
      position="middle"
      isSelected={isSelected}
      onClick={() => "cat"}
      onCloseModal={() => "none"}
      preview={<Preview />}
      content={<Content />}
    />
  );
}

export default CatCard;
