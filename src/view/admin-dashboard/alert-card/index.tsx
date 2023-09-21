import DashboardElement from "../../../components/DashboardElement";
import { useState } from "react";
import Preview from "./preview";
import Content from "./content";

function AlertCard() {
  const [isSelected, setIsSelected] = useState(false);

  return <DashboardElement title="Alertes" type="square" position="right" isSelected={isSelected} onClick={function(): void {
    setIsSelected(!isSelected);
  }} preview={<Preview />} content={<Content />} />
}

export default AlertCard;
