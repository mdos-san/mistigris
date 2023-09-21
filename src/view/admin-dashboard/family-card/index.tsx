import DashboardElement from "../../../components/DashboardElement";
import { useState } from "react";
import Preview from "./preview";
import Content from "./content";

function FamilyCard() {
  const [isSelected, setIsSelected] = useState(false);

  return <DashboardElement title="Familles" type="square" position="left" isSelected={isSelected} onClick={function(): void {
    setIsSelected(!isSelected);
  }} preview={<Preview />} content={<Content />} />
}

export default FamilyCard;
