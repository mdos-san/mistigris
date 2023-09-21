import DashboardElement from "../../../components/DashboardElement";
import { useState } from "react";
import Preview from "./preview";
import Content from "./content";

function CatCard() {
  const [isSelected, setIsSelected] = useState(false);

  return <DashboardElement title="Chats" type="square" position="middle" isSelected={isSelected} onClick={function(): void {
    setIsSelected(!isSelected);
  }} preview={<Preview />} content={<Content />} />
}

export default CatCard;
